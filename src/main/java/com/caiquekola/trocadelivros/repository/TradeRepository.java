package com.caiquekola.trocadelivros.repository;

import com.caiquekola.trocadelivros.model.Trade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TradeRepository extends JpaRepository<Trade, Long> {
}
