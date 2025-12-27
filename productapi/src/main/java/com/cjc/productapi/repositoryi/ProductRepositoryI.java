package com.cjc.productapi.repositoryi;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cjc.productapi.model.Product;

@Repository
public interface ProductRepositoryI extends JpaRepository<Product, Integer>{

}
