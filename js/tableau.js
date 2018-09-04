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
