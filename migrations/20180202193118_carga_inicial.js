const person = [
 { id: 1, nome: 'Nicolau', telefone: '(85) 3223.9363', nascimento: '1992-02-10'},
 { id: 2, nome: 'Yuri', telefone: '(85) 99982.8999', nascimento: '1990-02-15'},
 { id: 3, nome: 'Leonardo', telefone: '(85) 98123.1234', nascimento: '1991-02-20'},
 { id: 4, nome: 'Jose', telefone: '(85) 98158.4242', nascimento: '1987-07-19'},
 { id: 5, nome: 'Francisco', telefone: '(85) 91239.5423', nascimento: '1983-05-04'}
]

exports.up = knex => knex('pessoas').insert(person)

exports.down = knex => knex('pessoas').truncate()