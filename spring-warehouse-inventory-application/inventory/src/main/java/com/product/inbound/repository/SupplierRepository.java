package com.product.inbound.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.product.inbound.entity.Supplier;

public interface SupplierRepository extends JpaRepository<Supplier,Long> {

    Optional<Supplier> findByName(String name);
    
}
