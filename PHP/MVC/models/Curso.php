<?php
class Curso {
    private $conn;
    private $table = "cursos";

    public function __construct($db) {
        $this->conn = $db;
    }

    /**
     * Obtiene todos los registros de la tabla del curso.
     * 
     * Este método ejecuta una consulta SQL para seleccionar todos los registros
     * de la tabla definida en la propiedad $table de la clase.
     * 
     * @return array Retorna un array asociativo con todos los registros de la tabla
     * @throws PDOException Si ocurre un error en la consulta a la base de datos
     */
    public function getAll() {
        $query = "SELECT * FROM " . $this->table;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>