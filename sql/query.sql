-- Escreva a consulta SQL para listar o nome de todos os alunos matriculados na--
--disciplina de Cálculo do professor João.--
SELECT A.nome
FROM ALUNO AS A
JOIN CURSA AS C ON A.coda = C.coda
JOIN DISCIPLINA AS D ON C.codd = D.codd
JOIN LECIONA AS L ON D.codd = L.codd
JOIN PROFESSOR AS P ON L.codp = P.codp
WHERE D.nome = 'Cálculo' AND P.nome = 'João';

-- Escreva a consulta SQL para exibir a quantidade de alunos por disciplinas.
SELECT D.nome AS nome_disciplina, COUNT(C.coda) AS total_alunos
FROM DISCIPLINA AS D
JOIN CURSA AS C ON D.codd = C.codd
GROUP BY D.nome
ORDER BY D.nome;

-- Escreva a consulta SQL para listar as disciplinas que todos os professores lecionam.
SELECT D.nome AS nome_disciplina
FROM DISCIPLINA AS D
JOIN LECIONA AS L ON D.codd = L.codd
GROUP BY D.codd, D.nome
HAVING COUNT(DISTINCT L.codp) = (SELECT COUNT(*) FROM PROFESSOR);

-- Escreva a consulta SQL que exibe o total de professores. 
SELECT COUNT(*) AS total_professores
FROM PROFESSOR;

-- Escreva a consulta SQL para listar todos os alunos que cursaram alguma disciplina do ano 2000 até 2020.
SELECT DISTINCT A.nome AS nome_aluno
FROM ALUNO AS A
JOIN CURSA AS C ON A.coda = C.coda
WHERE C.ano BETWEEN 2000 AND 2020;