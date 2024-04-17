package com.product.inventory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.product.inventory.entity.Inventory;
import com.product.inventory.service.InventoryService;

@RestController
@RequestMapping("api/inventories")
public class InventoryController {

    @Autowired
    InventoryService inventoryService;

    @GetMapping
    public List<Inventory> getInventoryData(){
       return inventoryService.findAllInventories();
    }

    @GetMapping("/{id}")
    public Inventory getInventoryDetails(@PathVariable Long id){
       return inventoryService.findById(id);
    }

    @PostMapping
    public void addInventoryData(@RequestBody Inventory inventory){
        inventoryService.saveInventory(inventory);
    }

    @PutMapping("/{id}")
    public void updateInventoryData(@PathVariable Long id,@RequestBody Inventory inventory){
          inventoryService.updateInventory(id, inventory);
    }

    @GetMapping("/search")
    public List<Inventory> searchInventory(@RequestParam String keyword){
        return inventoryService.searchInventory(keyword);
    }
}
