package com.product.inventory.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.product.inventory.entity.Inventory;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory,Long> {

    @Query("SELECT i FROM Inventory i WHERE i.name LIKE %:keyword% OR " +
       "i.sku LIKE %:keyword% OR i.category LIKE %:keyword% OR i.location LIKE %:keyword% ")
    List<Inventory> searchByKeyword(@Param("keyword") String keyword);

    List<Inventory> findByQuantity(Integer quantity);

    Optional<Inventory> findBySku(String sku);

    
}
