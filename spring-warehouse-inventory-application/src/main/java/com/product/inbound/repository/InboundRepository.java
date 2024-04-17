package com.product.inbound.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.product.inbound.entity.Inbound;

@Repository
public interface InboundRepository extends JpaRepository<Inbound,Long> {
    
}
