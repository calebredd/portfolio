import React, { Component } from "react";
import $ from "jquery";
export default class Navbar extends Component{

    componentDidMount(){
        $(document).on('keydown', function(e){
            if(e.key == 'Escape') hideMenu();
        });
        $('.mobile-hamburger, .mobile-navbar a').on('click',function(e){
            e.stopPropagation();
            toggleMenu();
        });

        $('.main-content, .app-header').on('click',function(){
            hideMenu();
        });

        function toggleMenu(){
            $('.mobile-navbar').css('display', $('.mobile-navbar').css('display') === 'flex' ? 'none' : 'flex');
            $('.mobile-hamburger i.fa').toggleClass('fa-bars fa-times');
        }

        function hideMenu(){
            $('.mobile-navbar').hide();
            $('.mobile-hamburger i.fa').removeClass('fa-times').addClass('fa-bars');
        }
    }

    render(){
        return (
            <header className="app-header">
                <a href="#home">
                    <div className="navItem logoTitle">
                        <img className="familyPhoto" src="pictures/Caleb_Mugshot.png" alt="Caleb Redd Portrait"/>
                        <span>Caleb Redd</span>
                    </div>
                </a>
                <div className="mobile-hamburger"> 
                    <i className="fa fa-bars"></i>
                </div>
                <div className="navbar">
                    <a href="#home">
                        <div className="navItem">Home</div>
                    </a>
                    <a href="#about">
                        <div className="navItem">About</div>
                    </a>
                    <a href="#projects">
                        <div className="navItem">Projects</div>
                    </a>
                    <a href="#contact">
                        <div className="navItem">Contact</div>
                    </a>
                </div>
                <div className="mobile-navbar">
                    <a href="#home">
                        <div className="navItem">Home</div>
                    </a>
                    <a href="#about">
                        <div className="navItem">About</div>
                    </a>
                    <a href="#projects">
                        <div className="navItem">Projects</div>
                    </a>
                    <a href="#contact">
                        <div className="navItem">Contact</div>
                    </a>
                </div>
            </header>
        )
    }
}
