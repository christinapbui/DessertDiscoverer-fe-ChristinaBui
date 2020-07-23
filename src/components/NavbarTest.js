{
	/* <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
	<Navbar.Brand>
		<Link to="/">
			<img
				alt=""
				src={logo}
				width="100"
				height="auto"
				className="d-inline-block align-center"
			/>
		</Link>
	</Navbar.Brand>
	<Navbar.Toggle aria-controls="responsive-navbar-nav" />
	<Navbar.Collapse id="responsive-navbar-nav">
		<Nav className="mr-auto">
			{" "}
			<span style={{ paddingLeft: "10px" }}>
				<Link to="/">Home</Link>
			</span>
			<span className="navbar-link">
				<Link to="/desserts">Desserts</Link>
			</span>
			<span className="navbar-link">
				<Link to="/sellers">Sellers</Link>
			</span>
			<span className="navbar-link">
				<Link to="/reviews">Reviews</Link>
			</span>
			<span className="navbar-link">
				<Link to="/map">Map</Link>
			</span>
			<NavDropdown title="Profile" id="collasible-nav-dropdown">
				<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.2">
					Another action
				</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.3">
					Something
				</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="#action/3.4">
					Separated link
				</NavDropdown.Item>
			</NavDropdown>
		</Nav>
		<Nav>
			<Form inline>
				{localStorage.getItem("user") ? (
					<>
						<Button variant="warning">
							<Link to="/profile">Profile</Link>
						</Button>
						<Button variant="secondary" onClick={() => logout()}>
							Logout
						</Button>
					</>
				) : (
					<>
						<Button variant="danger" onClick={() => setOpen(!open)}>
							Login
						</Button>
						<Button variant="warning">
							<Link to="/register">Register</Link>
						</Button>
					</>
				)}

				<Button variant="outline-primary">
					<Link to="/add-dessert">Add your baked good</Link>
				</Button>
			</Form>
		</Nav>
	</Navbar.Collapse>
</Navbar>; */
}
