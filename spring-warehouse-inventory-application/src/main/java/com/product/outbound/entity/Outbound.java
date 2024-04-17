package com.product.outbound.entity;

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
public class Outbound {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String reference;
    @Column(name = "date_shipped")
    private LocalDateTime dateShipped;
    private String sku;
    private Integer quantity;
    private String destination;
    private String remarks;
    @ManyToOne
    private Customer customer;
}
