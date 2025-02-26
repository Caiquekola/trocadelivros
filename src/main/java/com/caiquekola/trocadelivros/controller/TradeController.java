package com.caiquekola.trocadelivros.controller;

import com.caiquekola.trocadelivros.model.Trade;
import com.caiquekola.trocadelivros.service.TradeService;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/trades")
public class TradeController {

    private final TradeService tradeService;

    public TradeController(TradeService tradeService) {
        this.tradeService = tradeService;
    }

    @PostMapping
    public Trade requestTrade(@RequestBody Trade trade) {
        return tradeService.requestTrade(trade);
    }

    @PutMapping("/{id}/confirm")
    public void confirmTrade(@PathVariable Long id) {
        tradeService.confirmTrade(id);
    }
}