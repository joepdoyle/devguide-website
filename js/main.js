(() => {
    const mobileWidth = 500;

    const addMenuBackground = () => {
        const pageWidth = window.innerWidth;
        const bodyOffset = document.body.scrollTop || document.documentElement.scrollTop;
        const navigation = document.querySelector("header .navbar");
    
        if(pageWidth > mobileWidth){
            bodyOffset > 0 ? navigation.classList.add("nav-fixed") : navigation.classList.remove("nav-fixed");
        }
    }

    const onNavItemClick = () => {
        const navItemList = document.querySelectorAll(".section-link");
        const navItems = [...navItemList];

        navItems.forEach(item => {
            item.addEventListener("click", event => {
                event.preventDefault();

                const sectionId = event.target.getAttribute("href") || event.target.dataset.href;

                scrollToSection(sectionId);
            })
        })
    }

    const scrollToSection = sectionId => {
        let sectionPosition, sectionOffset;
        const navigationHeight = document.querySelector("header nav").offsetHeight;
        const pageWidth = window.innerWidth;

        if(sectionId != "#") {
            sectionOffset = document.querySelector(sectionId).offsetTop;
            sectionPosition = pageWidth > mobileWidth ? sectionOffset - navigationHeight : sectionOffset;
        } else {
            sectionPosition = 0;
        }

        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': sectionPosition
        })
    }

    window.addEventListener("scroll", () => {
        addMenuBackground();
    })

    onNavItemClick();

})();