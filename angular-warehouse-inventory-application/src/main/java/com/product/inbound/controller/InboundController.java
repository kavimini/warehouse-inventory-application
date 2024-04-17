package com.product.inbound.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.product.inbound.entity.Inbound;
import com.product.inbound.service.InboundService;

@RestController
@RequestMapping("api/inbound")
public class InboundController {

    @Autowired
    InboundService inboundService;

    @GetMapping
    public List<Inbound> getInboundData(){
       return inboundService.findAll();
    }

    @PostMapping
    public void addInboundData(@RequestBody Inbound inbound){
        inboundService.saveInboundAndUpdateInventory(inbound);
    }

    
}
