package com.product.user.model;

import lombok.Data;

@Data
public class UserStatusDTO {
    private boolean userExists;
    private String roleName;
}
