package com.product.outbound.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.product.outbound.entity.Outbound;
import com.product.outbound.service.OutboundService;

@RestController
@RequestMapping("api/outbound")
public class OutboundController {
    

    @Autowired
    OutboundService outboundService;

    @GetMapping
    public List<Outbound> getInboundData(){
       return outboundService.findAll();
    }

    @PostMapping
    public void addInboundData(@RequestBody Outbound outbound){
        outboundService.saveOutboundAndUpdateInventory(outbound);
    }

}
