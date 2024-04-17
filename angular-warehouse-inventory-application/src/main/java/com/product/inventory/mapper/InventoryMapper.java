package com.product.inventory.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

import com.product.inventory.entity.Inventory;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE )
public interface InventoryMapper {

    @Mapping(target = "id", ignore = true)
    void updateInventoryFromOld(Inventory source, @MappingTarget Inventory target);
}
