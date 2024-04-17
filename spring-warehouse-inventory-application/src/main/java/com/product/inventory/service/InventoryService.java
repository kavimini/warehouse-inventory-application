package com.product.inventory.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.product.inbound.entity.Inbound;
import com.product.inventory.entity.Inventory;
import com.product.inventory.mapper.InventoryMapper;
import com.product.inventory.repository.InventoryRepository;
import com.product.outbound.entity.Outbound;

@Service
public class InventoryService {

    @Autowired
    InventoryRepository inventoryRepo;

    @Autowired
    private InventoryMapper inventoryMapper;

    public List<Inventory> findAllInventories(){
        return inventoryRepo.findAll();
    }

    public Inventory findById(Long id){
        Inventory inventory = inventoryRepo.findById(id).orElseThrow(() -> new RuntimeException("Id not found"));
        return inventory;
    }

    public void saveInventory(Inventory inventory){
        inventoryRepo.save(inventory);
    }

    @Transactional
    public void updateInventory(Long id,Inventory inventory){
        Inventory updateInventory = inventoryRepo.findById(id).orElseThrow(() -> new RuntimeException("Id not found"));
        inventoryMapper.updateInventoryFromOld(inventory, updateInventory);
        
        inventoryRepo.save(updateInventory);
    }

    public List<Inventory> searchInventory(String keyword) {
        if (StringUtils.isNumeric(keyword)){
            List<Inventory> searchInventories = new ArrayList<>();
            searchInventories.addAll(inventoryRepo.findByQuantity(Integer.parseInt(keyword)));
            //search numbers in string
            searchInventories.addAll(inventoryRepo.searchByKeyword(keyword));

            return searchInventories;
        } 
        return inventoryRepo.searchByKeyword(keyword);
    }

    public void updateInventoryAfterInbound(Inbound inbound) {
        Optional<Inventory> inventory = inventoryRepo.findBySku(inbound.getSku());
        if (inventory.isPresent()) {
            Inventory inventoryData = inventory.get();
            inventoryData.setQuantity(inventoryData.getQuantity() + inbound.getQuantity());
            inventoryData.setLocation(inbound.getLocation());
            inventoryRepo.save(inventoryData);
        }
    }

    public void updateInventoryAfterOutbound(Outbound outbound) {
        Optional<Inventory> inventory = inventoryRepo.findBySku(outbound.getSku());
        if (inventory.isPresent()) {
            Inventory inventoryData = inventory.get();
            inventoryData.setQuantity(inventoryData.getQuantity() - outbound.getQuantity());
            inventoryRepo.save(inventoryData);
        }
    }
    
}
