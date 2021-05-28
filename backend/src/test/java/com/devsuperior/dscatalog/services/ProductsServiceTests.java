package com.devsuperior.dscatalog.services;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.devsuperior.dscatalog.dto.ProductDTO;
import com.devsuperior.dscatalog.entities.Category;
import com.devsuperior.dscatalog.entities.Product;
import com.devsuperior.dscatalog.repositories.CategoryRepository;
import com.devsuperior.dscatalog.repositories.ProductRepository;
import com.devsuperior.dscatalog.services.exceptions.DatabaseException;
import com.devsuperior.dscatalog.services.exceptions.ResourceNotFoundException;
import com.devsuperior.dscatalog.tests.factory.ProductFactory;

@ExtendWith(SpringExtension.class)
public class ProductsServiceTests {

	@InjectMocks
	private ProductService service;

	@Mock
	private ProductRepository repository;
	
	@Mock
	private CategoryRepository categoryRepository;

	private long existingId;
	private long nonExistingId;
	private long dependentId;
	private Product product;
	private PageImpl<Product> page;

	@BeforeEach
	void setUp() throws Exception {
		existingId = 1L;
		nonExistingId = 1000L;
		dependentId = 4L;

		product = ProductFactory.createProduct();
		
		page = new PageImpl<>(List.of(product));

		Mockito.when(repository.getOne(existingId)).thenReturn(product);

		Mockito.when(repository.find(ArgumentMatchers.any(), ArgumentMatchers.anyString(), ArgumentMatchers.any()))
				.thenReturn(page);

		Mockito.when(repository.save(ArgumentMatchers.any())).thenReturn(product);
		
		Mockito.when(categoryRepository.getOne(existingId)).thenReturn(new Category(1L, "Nome"));

		Mockito.when(repository.findById(existingId)).thenReturn(Optional.of(product));
		Mockito.when(repository.findById(nonExistingId)).thenReturn(Optional.empty());

		Mockito.doNothing().when(repository).deleteById(existingId);
		Mockito.doThrow(EmptyResultDataAccessException.class).when(repository).deleteById(nonExistingId);
		Mockito.doThrow(DatabaseException.class).when(repository).deleteById(dependentId);
		Mockito.doThrow(ResourceNotFoundException.class).when(repository).getOne(nonExistingId);

	}

	@Test
	public void updateShouldReturnResourceNotFoundExceptionWhenIdExistNotExist() {
		ProductDTO productDTO = ProductFactory.createProductDTO();
		
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.update(nonExistingId, productDTO);
		});
	}

	@Test
	public void updateShouldReturnProductDTOWhenIdExist() {
//		ProductDTO dto = new ProductDTO();
		
		ProductDTO dto = ProductFactory.createProductDTO();
		
		ProductDTO result = service.update(existingId, dto);

		Assertions.assertNotNull(result);
	}
	
	@Test
	public void findByIdShouldReturnResourceNotFoundExceptionWhenIdDoNotExist() {
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.findById(nonExistingId);
		});
	}

	@Test
	public void findByIdShouldReturnProductDTOWhenExist() {

		ProductDTO dto = service.findById(existingId);

		Assertions.assertNotNull(dto);
	}

	@Test
	public void findAllPagedShouldReturnPage() {
		Long categoryId = 0L;
		String name = "";
		PageRequest pageRequest = PageRequest.of(0, 10);

		Page<ProductDTO> result = service.findAllPaged(categoryId, name, pageRequest);

		Assertions.assertNotNull(result);
		Assertions.assertFalse(result.isEmpty());

		Mockito.verify(repository, Mockito.times(1)).find(null, name, pageRequest);
	}

	@Test
	public void deleteShouldThrowDatabaseExceptionWhenDpendentID() {

		Assertions.assertThrows(DatabaseException.class, () -> {
			service.delete(dependentId);
		});

		Mockito.verify(repository, Mockito.times(1)).deleteById(dependentId);
	}

	@Test
	public void deleteShouldThrowResourceNotFoundExceptionIdDoesNotExists() {

		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.delete(nonExistingId);
		});

		Mockito.verify(repository, Mockito.times(1)).deleteById(nonExistingId);
	}

	@Test
	public void deleteShouldDoNothingWhenIdExists() {

		Assertions.assertDoesNotThrow(() -> {
			service.delete(existingId);
		});

		Mockito.verify(repository, Mockito.times(1)).deleteById(existingId);
	}

}
