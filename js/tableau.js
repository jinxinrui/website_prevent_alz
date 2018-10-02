window.onload = () => {
    genderViz();
    dementiaPeopleViz();
    deathRateViz();
    forecastViz();
}

function ageGroupViz() {
    // JS object that points at empty div in the html
    var placeholderDiv = document.getElementById('ageGroupViz');
    // URL of the viz to be embedded
    var url = 'https://public.tableau.com/views/Deathsalzheimersanddementia-Agegroup/agegroup?:embed=y&:display_count=yes&publish=yes';
    // An object that contains options specifying how to embed the viz
    var options = {
        width: '1000px',
        height: '600px',
        hideTabs: true,
        hideToolbar: true,
    };
    viz = new tableau.Viz(placeholderDiv, url, options);
}

function alzDeathViz() {
    // JS object that points at empty div in the html
    var placeholderDiv = document.getElementById("alzDeathViz");
    // URL of the viz to be embedded
    var url = "https://public.tableau.com/views/Alzheimersdeaths2005-14/Alzheimersdeaths?:embed=y&:display_count=yes&publish=yes";
    // An object that contains options specifying how to embed the viz
    var options = {
        width: '1000px',
        height: '600px',
        hideTabs: true,
        hideToolbar: true,
    };
    viz = new tableau.Viz(placeholderDiv, url, options);
}

function deathRateViz() {
    // JS object that points at empty div in the html
    var placeholderDiv = document.getElementById("deathRateViz");
    // URL of the viz to be embedded
    var url = "https://public.tableau.com/views/DeathratesAustralia/deathrates?:embed=y&:display_count=yes&publish=yes";
    // An object that contains options specifying how to embed the viz
    var options = {
        width: '1000px',
        height: '600px',
        hideTabs: true,
        hideToolbar: true,
    };
    viz = new tableau.Viz(placeholderDiv, url, options);
}

function forecastViz() {
    // JS object that points at empty div in the html
    var placeholderDiv = document.getElementById("forecastViz");
    // URL of the viz to be embedded
    var url = "https://public.tableau.com/views/Alzheimersdeaths2005-14-Forecasting/Alzheimersdeaths?:embed=y&:display_count=yes&publish=yes";
    // An object that contains options specifying how to embed the viz
    var options = {
        width: '1200px',
        height: '600px',
        hideTabs: true,
        hideToolbar: true,
    };
    viz = new tableau.Viz(placeholderDiv, url, options);
}

function ausstatsViz() {
    // JS object that points at empty div in the html
    var placeholderDiv = document.getElementById("ausstatsViz");
    // URL of the viz to be embedded
    var url = "https://public.tableau.com/views/Australiastats/statsaus?:embed=y&:display_count=yes&publish=yes";
    // An object that contains options specifying how to embed the viz
    var options = {
        width: '1200px',
        height: '600px',
        hideTabs: true,
        hideToolbar: true,
    };
    viz = new tableau.Viz(placeholderDiv, url, options);
}

function dementiaFemaleViz() {
    // JS object that points at empty div in the html
    var placeholderDiv = document.getElementById("dementiaFemaleViz");
    // URL of the viz to be embedded
    var url = "https://public.tableau.com/views/femaleswithdementiabystate2011-2018/femalesanddementia?:embed=y&:display_count=yes&publish=yes";
    // An object that contains options specifying how to embed the viz
    var options = {
        width: '1200px',
        height: '600px',
        hideTabs: true,
        hideToolbar: true,
    };
    viz = new tableau.Viz(placeholderDiv, url, options);
}

function dementiaMaleViz() {
    // JS object that points at empty div in the html
    var placeholderDiv = document.getElementById("dementiaMaleViz");
    // URL of the viz to be embedded
    var url = "https://public.tableau.com/views/Maleswithdementiabystate2011-2018/malesanddementia?:embed=y&:display_count=yes&publish=yes";
    // An object that contains options specifying how to embed the viz
    var options = {
        width: '1200px',
        height: '600px',
        hideTabs: true,
        hideToolbar: true,
    };
    viz = new tableau.Viz(placeholderDiv, url, options);
}

function dementiaPeopleViz() {
    // JS object that points at empty div in the html
    var placeholderDiv = document.getElementById("dementiaPeopleViz");
    // URL of the viz to be embedded
    var url = "https://public.tableau.com/views/Noofpeoplewithdementiabystate2011-2018/australiadementia?:embed=y&:display_count=yes&publish=yes";
    // An object that contains options specifying how to embed the viz
    var options = {
        width: '1200px',
        height: '600px',
        hideTabs: true,
        hideToolbar: true,
    };
    viz = new tableau.Viz(placeholderDiv, url, options);
}

function genderViz() {
    // JS object that points at empty div in the html
    var placeholderDiv = document.getElementById("genderViz");
    // URL of the viz to be embedded
    var url = "https://public.tableau.com/views/dashboardmaleandfemale/Dashboard1?:embed=y&:display_count=yes&publish=yes";
    // An object that contains options specifying how to embed the viz
    var options = {
        width: '1200px',
        height: '600px',
        hideTabs: true,
        hideToolbar: true,
    };
    viz = new tableau.Viz(placeholderDiv, url, options);
}