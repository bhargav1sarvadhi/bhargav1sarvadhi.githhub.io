import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import "./Navbar.css"; // Import CSS file for styling
import logo from "../../assets/logo.jpg"; // Adjust the path to your logo image

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      cartCount: 0,
      currentOfferIndex: 0,
      offers: [
        "50% OFF on All Products! Shop Now!",
        "Buy 1 Get 1 Free on Selected Items!",
        "Free Shipping on Orders Over $50!",
        "Extra 10% Off with Code SAVE10!"
      ],
      isCategoriesOpen: false,
      showModal: false, // State to control the visibility of the modal
    };
  }

  componentDidMount() {
    this.offerInterval = setInterval(() => {
      this.setState((prevState) => ({
        currentOfferIndex: (prevState.currentOfferIndex + 1) % prevState.offers.length
      }));
    }, 3000); // Change offer every 3 seconds

    // Check if on mobile view
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    clearInterval(this.offerInterval); // Clear interval when component unmounts
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidUpdate(prevProps) {
    const { cartReducer } = this.props;
    if (cartReducer.cart !== prevProps.cartReducer.cart) {
      this.setState({ cartCount: cartReducer.cart.length });
    }
  }

  handleResize = () => {
    this.setState({ isMobile: window.innerWidth <= 768 });
  };

  toggleCategories = () => {
    this.setState(prevState => ({ isCategoriesOpen: !prevState.isCategoriesOpen }));
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { cartCount, offers, currentOfferIndex, showModal, isMobile } = this.state;

    return (
      <div>
        <div className="offer-bar">
          <p>{offers[currentOfferIndex]}</p>
        </div>
        <div className="navbar">
          <span className="logo">
            <img src={logo} alt="HappyKart Logo" />
          </span>
          {!isMobile && (
            <div className="nav-links">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="category/Tumbler" className="nav-link">Tumbler</Link>
              <Link to="category/Tea Cup" className="nav-link">Tea Cup</Link>
              <Link to="category/Whiskey Glasses" className="nav-link">Whiskey Glasses</Link>
              <Link to="category/Small Juice Glass" className="nav-link">Small Juice Glass</Link>
              <Link to="category/Pitcher" className="nav-link">Pitcher</Link>
              <Link to="category/More Products" className="nav-link">More</Link>
            </div>
          )}
          {isMobile && (
            <button className="search-button">
              <FaSearch />
            </button>
          )}
          {!isMobile && (
            <div className="icons">
              <button className="icon-button">
                <FaSearch />
              </button>
              <button className="icon-button">
                <FaUser />
              </button>
              <Link to="/cart" className="icon-button-link">
                <button className="icon-button">
                  <FaShoppingCart />
                  <span className="cart-count">{cartCount}</span>
                </button>
              </Link>
            </div>
          )}
        </div>

        {isMobile && (
          <div className="bottom-menu">
            <button className="bottom-button" onClick={this.toggleModal}>
              <FaBars />
            </button>
            <Link to="/profile" className="bottom-button-link">
              <button className="bottom-button">
                <FaUser />
              </button>
            </Link>
            <Link to="/cart" className="icon-button-link">
              <button className="icon-button">
                <FaShoppingCart />
                <span className="cart-count">{cartCount}</span>
              </button>
            </Link>
          </div>
        )}

        {/* Modal for Category List */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-button" onClick={this.toggleModal}>×</button>
              <h3>Categories</h3>
              <Link to="/" className="nav-link" onClick={this.toggleModal}>Home</Link>
              <Link to="category/Tumbler" className="nav-link" onClick={this.toggleModal}>Tumbler</Link>
              <Link to="category/Tea Cup" className="nav-link" onClick={this.toggleModal}>Tea Cup</Link>
              <Link to="category/Whiskey Glasses" className="nav-link" onClick={this.toggleModal}>Whiskey Glasses</Link>
              <Link to="category/Small Juice Glass" className="nav-link" onClick={this.toggleModal}>Small Juice Glass</Link>
              <Link to="category/Pitcher" className="nav-link" onClick={this.toggleModal}>Pitcher</Link>
              <Link to="category/More Products" className="nav-link" onClick={this.toggleModal}>More</Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartReducer: state.cartReducer,
});

export default connect(mapStateToProps)(Navbar);
