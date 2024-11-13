import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

interface Transaction {
  date: string;
  description: string;
  amount: number;
}

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})

export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }
}
