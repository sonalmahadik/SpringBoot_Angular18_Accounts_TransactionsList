package com.demo.controller;

import com.demo.entity.Account;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/transactions")
public class AccountController {

    @GetMapping
    public List<Transaction> getTransactions() {
        return Arrays.asList(
            new Transaction("2023-11-01", "Groceries", -50.0),
            new Transaction("2023-11-02", "Salary", 1500.0),
            new Transaction("2023-11-03", "Coffee", -5.0)
        );
    }
}
