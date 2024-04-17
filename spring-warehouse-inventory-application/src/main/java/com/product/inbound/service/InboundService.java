package com.product.inbound.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.product.inbound.entity.Inbound;
import com.product.inbound.entity.Supplier;
import com.product.inbound.repository.InboundRepository;
import com.product.inbound.repository.SupplierRepository;
import com.product.inventory.service.InventoryService;

@Service
public class InboundService {

    private final InboundRepository inboundRepository;
    private final SupplierRepository supplierRepository;
    private final InventoryService inventoryService;

    public InboundService(InboundRepository inboundRepository, SupplierRepository supplierRepository, InventoryService inventoryService) {
        this.inboundRepository = inboundRepository;
        this.supplierRepository = supplierRepository;
        this.inventoryService = inventoryService;
    }
    
    public List<Inbound> findAll(){
        return inboundRepository.findAll();
    }

    @Transactional
    public void saveInboundAndUpdateInventory(Inbound inbound) {
        Supplier supplier = inbound.getSupplier();
        Optional<Supplier> existingSupplier = supplierRepository.findByName(supplier.getName());

        if (supplier != null &&  !existingSupplier.isPresent()) {
            supplier = supplierRepository.save(supplier);
            inbound.setSupplier(supplier);
        } else {
            inbound.setSupplier(existingSupplier.get());
        }

        Inbound inboundSaved = inboundRepository.save(inbound);
        //update inbound quantity & storage location in inventory
        inventoryService.updateInventoryAfterInbound(inboundSaved);
    }
   
}
