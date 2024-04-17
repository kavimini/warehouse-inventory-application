package com.product.outbound.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.product.outbound.entity.Outbound;

@Repository
public interface OutboundRepository extends JpaRepository<Outbound,Long> {

    
} 
