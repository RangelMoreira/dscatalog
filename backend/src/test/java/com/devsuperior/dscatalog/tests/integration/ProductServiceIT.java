package com.devsuperior.dscatalog.tests.integration;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dscatalog.dto.ProductDTO;
import com.devsuperior.dscatalog.services.ProductService;
import com.devsuperior.dscatalog.services.exceptions.ResourceNotFoundException;

@SpringBootTest
@Transactional
public class ProductServiceIT {

	@Autowired
	private ProductService service;

	private long existingId;
	private long nonExistingId;
	private long countTotalProducts;
	private long countPCGamerProducts;
	private PageRequest pageRequest;

	@BeforeEach
	void setUp() throws Exception {
		existingId = 1L;
		nonExistingId = 1000L;
		countTotalProducts = 25L;
		countPCGamerProducts = 21L;
		pageRequest = PageRequest.of(0,10);
	}

	@Test
	public void deleteShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {

		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.delete(nonExistingId);
		});

	}

	@Test
	public void deleteShouldDoNothingWhenIdExists() {

		Assertions.assertDoesNotThrow(() -> {
			service.delete(existingId);
		});
	}
	
	@Test
	public void findAllPagedShouldReturnNothingWhenNameDoesNotExist() {
		String name = "Camera";
		
		Page<ProductDTO> result = service.findAllPaged(0L, name, pageRequest);	
		
		Assertions.assertTrue(result.isEmpty());
		
	}
	
	@Test
	public void findAllPagedShouldReturnProductsWhenNameExists() {
		String name = "PC Gamer";
		
		Page<ProductDTO> result = service.findAllPaged(0L, name, pageRequest);	
		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countPCGamerProducts, result.getTotalElements());
		
	}
	
	@Test
	public void findAllPagedShouldReturnProductsWhenNameExistsIgnoringCase() {
		String name = "pc gAMer";
		
		Page<ProductDTO> result = service.findAllPaged(0L, name, pageRequest);	
		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countPCGamerProducts, result.getTotalElements());
		
	}
	
	@Test
	public void findAllPagedShouldReturnAllProductsWhenNameIsEmpty() {
		String name = "";
		
		Page<ProductDTO> result = service.findAllPaged(0L, name, pageRequest);	
		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countTotalProducts, result.getTotalElements());
		
	}

}