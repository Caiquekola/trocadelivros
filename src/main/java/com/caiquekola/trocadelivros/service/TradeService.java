package com.caiquekola.trocadelivros.service;
import com.caiquekola.trocadelivros.model.Trade;
import com.caiquekola.trocadelivros.repository.TradeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TradeService {

    private final TradeRepository tradeRepository;

    public TradeService(TradeRepository tradeRepository) {
        this.tradeRepository = tradeRepository;
    }

    public List<Trade> listAllTrades() {
        return tradeRepository.findAll();
    }

    public Optional<Trade> getTradeById(Long id) {
        return tradeRepository.findById(id);
    }

    public Trade requestTrade(Trade trade) {
        return tradeRepository.save(trade);
    }

    public void confirmTrade(Long id) {
        tradeRepository.findById(id).ifPresent(trade -> {
            trade.setStatus(Trade.Status.COMPLETED);
            tradeRepository.save(trade);
        });
    }
}
