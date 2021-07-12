export type CategoryResponse ={
  content: Category[];
  totalPages: number; 
}

export type Category = {
  id: number;
  name: string;
}