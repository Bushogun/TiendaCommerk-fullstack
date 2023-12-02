CREATE TABLE Usuario (
    UsuarioID INT PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(100) NOT NULL,
    NombreUsuario VARCHAR(50) NOT NULL,
    CorreoElectronico VARCHAR(200) NOT NULL,
    Contraseña VARCHAR(50) NOT NULL,
    TotalVentas INT,
    Balance INT
);

CREATE TABLE Producto (
    ProductoID INT PRIMARY KEY,
    NombreProducto VARCHAR(100),
	DescripcionProducto VARCHAR(1000),
    PrecioReal DECIMAL(10, 2),
    PrecioVenta DECIMAL(10, 2),
	Cantidad INT,
	ImagenProducto VARBINARY(MAX),
    FechaCreacion DATETIME
);

CREATE SEQUENCE Seq_VentaID
    START WITH 1
    INCREMENT BY 1
    MINVALUE 1
    MAXVALUE 9999
    CYCLE;

CREATE TABLE Venta (
    VentaID INT PRIMARY KEY DEFAULT NEXT VALUE FOR Seq_VentaID,
    UsuarioID INT,
    FechaVenta DATE,
    Total DECIMAL(10, 2),
    FOREIGN KEY (UsuarioID) REFERENCES Usuario(UsuarioID)
);

CREATE TABLE DetalleVenta (
    DetalleVentaID INT PRIMARY KEY,
    VentaID INT NOT NULL,
    ProductoID INT NOT NULL,
    Cantidad INT,
    PrecioUnitario DECIMAL(10, 2),
    FOREIGN KEY (VentaID) REFERENCES Venta(VentaID),
    FOREIGN KEY (ProductoID) REFERENCES Producto(ProductoID)
);


INSERT INTO Usuario (Nombre, NombreUsuario, CorreoElectronico, Contraseña, TotalVentas, Balance)
VALUES 
    ('Juan Pérez', 'juancito123', 'juan@example.com', 'clave123', 10, 500),
    ('María López', 'mary89', 'maria@example.com', 'contraseña456', 15, 750),
    ('Carlos García', 'carlitos22', 'carlos@example.com', 'p4l4br4secreta', 8, 300),
    ('Laura Martínez', 'lauri', 'laura@example.com', 'miContraseña', 20, 1200),
    ('Pedro Ramírez', 'pedrito123', 'pedro@example.com', 'password123', 12, 600);

INSERT INTO Producto (ProductoID, NombreProducto, DescripcionProducto, PrecioReal, PrecioVenta, Cantidad, ImagenProducto, FechaCreacion)
VALUES 
    (1, 'Camisa', 'Camisa de algodón', 25.99, 39.99, 50, NULL, GETDATE()),
    (2, 'Zapatos', 'Zapatos de cuero', 59.50, 89.99, 30, NULL, GETDATE()),
    (3, 'Teléfono móvil', 'Teléfono inteligente', 399.99, 499.99, 20, NULL, GETDATE()),
    (4, 'Libro', 'Novela de ciencia ficción', 15.00, 24.99, 100, NULL, GETDATE()),
    (5, 'Cámara', 'Cámara digital de alta resolución', 199.00, 299.99, 15, NULL, GETDATE());

INSERT INTO Venta (UsuarioID, FechaVenta, Total)
VALUES 
    (1, '2023-11-05', 249.99),
    (3, '2023-11-08', 179.99),
    (4, '2023-11-10', 29.99),
    (2, '2023-11-15', 449.98),
    (5, '2023-11-20', 119.97);

INSERT INTO DetalleVenta (DetalleVentaID, VentaID, ProductoID, Cantidad, PrecioUnitario)
VALUES 
    (1, 1, 3, 1, 399.99),
    (2, 2, 1, 2, 19.99),
    (3, 3, 4, 1, 15.00),
    (4, 4, 5, 3, 39.99),
    (5, 5, 2, 1, 59.50);
