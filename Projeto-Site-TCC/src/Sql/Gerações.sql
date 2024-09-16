create database gerações;
use gerações;

create table cursos(
id_curso int not null auto_increment primary key,
nome_curso varchar(20),
categoria_curso varchar(20),
descrição_curso text,
valor_curso decimal(5,2)
);

create table registro(
id_login int not null auto_increment primary key,
email varchar(30),
nick varchar(15), /* nome ficticio e publico para o perfil dos usuarios*/
senha varchar(15),
cod_curso int,
foreign key (cod_curso) references cursos(id_curso)
);

create table instituição (
id_instituição int not null auto_increment primary key,
nome_professores varchar(30),
staff varchar(20),
num_alunos varchar(20),
num_professor varchar(20),
descrição text
);

create table pedido (
id_pedido int not null auto_increment primary key,
nome_curso varchar(20),
cod_login int,
cod_curso int,
foreign key (cod_login) references registro(id_login),
foreign key (cod_curso) references cursos(id_curso)
);