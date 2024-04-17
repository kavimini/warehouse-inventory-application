package com.product.outbound.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.product.inventory.service.InventoryService;
import com.product.outbound.entity.Customer;
import com.product.outbound.entity.Outbound;
import com.product.outbound.repository.CustomerRepository;
import com.product.outbound.repository.OutboundRepository;

@Service
public class OutboundService {
    
    private final OutboundRepository outboundRepository;
    private final CustomerRepository customerRepository;
    private final InventoryService inventoryService;

    public OutboundService(OutboundRepository outboundRepository,CustomerRepository customerRepository,InventoryService inventoryService){
        this.outboundRepository = outboundRepository;
        this.customerRepository = customerRepository;
        this.inventoryService = inventoryService;
    }

    public List<Outbound> findAll(){
        return outboundRepository.findAll();
    }

    public void saveOutboundAndUpdateInventory(Outbound outbound){
        Customer customer = outbound.getCustomer();
        Optional<Customer> existingCustomer = customerRepository.findByName(customer.getName());

        if (customer != null &&  !existingCustomer.isPresent()) {
            customer = customerRepository.save(customer);
            outbound.setCustomer(customer);
        } else {
            outbound.setCustomer(existingCustomer.get());
        }

        Outbound outboundSaved = outboundRepository.save(outbound);
        //update inbound quantity in inventory
        inventoryService.updateInventoryAfterOutbound(outboundSaved);
    }
}
