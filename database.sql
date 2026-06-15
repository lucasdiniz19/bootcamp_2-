-- Criação da tabela de histórico de cotações

CREATE TABLE historico_cotacoes (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    valor NUMERIC NOT NULL,
    data_consulta TIMESTAMP DEFAULT NOW()
);

-- Habilita Row Level Security

ALTER TABLE historico_cotacoes
ENABLE ROW LEVEL SECURITY;

-- Permite leitura pública

CREATE POLICY "Permitir leitura publica"
ON historico_cotacoes
FOR SELECT
USING (true);

-- Permite inserção pública

CREATE POLICY "Permitir insercao publica"
ON historico_cotacoes
FOR INSERT
WITH CHECK (true);