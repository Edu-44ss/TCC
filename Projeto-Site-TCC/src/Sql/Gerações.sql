create database Gerações;
use Gerações;

create table Cliente (
id_cliente int not null auto_increment primary key,
Nome varchar(60),
RG varchar(13),
CPF varchar(15),
Endereco varchar(30),
Telefone varchar(15)
);

desc Cliente;
select * from Cliente;
insert into Cliente(Nome, RG, CPF, Endereco, Telefone)values('Renato Vinícius Gomes','15.171.154-5','137.260.079-54','Rua José Cadilhe','41 997015919'),
('Isaac Rosa de Jesus','15.171.154-5','137.260.079-54','Rua José Cadilhe','41 997015919'),
('Eduardo da Graça Firmino','15.171.154-5','137.260.079-54','Rua José Cadilhe','41 997015919');


create table Escola(
id_escola int not null auto_increment primary key,
Nome varchar(16),
Endereco varchar(30),
Telefone varchar(15),
CNPJ varchar(60),
cod_cliente int,
foreign key (cod_cliente) references Cliente(id_cliente)
);