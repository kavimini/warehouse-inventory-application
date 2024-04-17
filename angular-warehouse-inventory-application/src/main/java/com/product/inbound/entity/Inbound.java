package com.product.inbound.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Inbound {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String reference;
    @Column(name = "date_received")
    private LocalDateTime dateReceived;
    private String sku;
    private Integer quantity;
    private String location;
    private String remarks;
    @ManyToOne
    private Supplier supplier;
}
