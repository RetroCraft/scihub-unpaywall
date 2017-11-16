angular.module('templates.app', ['faq.tpl.html', 'footer.tpl.html', 'header.tpl.html', 'landing.tpl.html', 'page-not-found.tpl.html', 'welcome.tpl.html']);

angular.module("faq.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("faq.tpl.html",
    "<div class=\"ti-page-header\" ng-include=\"'header.tpl.html'\"></div>\n" +
    "\n" +
    "<div class=\"page faq\">\n" +
    "    <div class=\"faq screen\" id=\"faq\">\n" +
    "        <div class=\"content\">\n" +
    "            <h1>Frequently asked questions</h1>\n" +
    "            <dl>\n" +
    "\n" +
    "                <!--\n" +
    "                <dt id=\"who-is-behind-this\"><i class=\"fa fa-chevron-right\"></i>Who's behind Unpaywall?</dt>\n" +
    "                <dd>\n" +
    "                    We're <a href=\"http://impactstory.org/about\">Impactstory,</a>\n" +
    "                    a nonprofit working to make science more open and reusable online.\n" +
    "                    We're supported by grants from <span class=\"funders\">\n" +
    "                    the National Science Foundation and the Alfred P. Sloan Foundation\n" +
    "            </span>\n" +
    "                </dd>\n" +
    "                -->\n" +
    "\n" +
    "\n" +
    "                <dt id=\"how-often-finds-fulltext\"><i class=\"fa fa-chevron-right\"></i>How often does Unpaywall find full text?</dt>\n" +
    "                <dd>\n" +
    "                    Overall, Unpaywall users find fulltext for 47% of articles. You may get different results,\n" +
    "                    depending on the age and topic of the articles you're reading. There's more information\n" +
    "                    on how we found these numbers in\n" +
    "                    <a href=\"https://peerj.com/preprints/3119v1/\">this paper.</a>\n" +
    "\n" +
    "                    This success rate will improve as we tweak our algorithm and as\n" +
    "                    mandatory open access requirements take effect in the\n" +
    "                    <a href=\"http://scholcomm.columbia.edu/open-access/public-access-mandates-for-federally-funded-research/\">US,</a>\n" +
    "                    <a href=\"http://www.rcuk.ac.uk/research/openaccess/\">UK,</a>\n" +
    "                    <a href=\"http://www.sciencemag.org/news/2016/05/dramatic-statement-european-leaders-call-immediate-open-access-all-scientific-papers/\">Europe,</a>\n" +
    "                    and elsewhere.\n" +
    "                </dd>\n" +
    "\n" +
    "                <dt id=\"how-do-you-find-articles\"><i class=\"fa fa-chevron-right\"></i>How do you find all these fulltext articles?</dt>\n" +
    "                <dd>\n" +
    "                    We harvest content directly from thousands of open-access repositories worldwide.\n" +
    "                    We also use great open data from\n" +
    "                    <a href=\"https://www.ncbi.nlm.nih.gov/pmc/\">PubMed Central</a>,\n" +
    "                    <a href=\"https://doaj.org/\">the DOAJ,</a>\n" +
    "                    <a href=\"https://www.crossref.org/\">Crossref</a> (particulary their license info), and\n" +
    "                    <a href=\"https://www.datacite.org/\">DataCite.</a>\n" +
    "                </dd>\n" +
    "\n" +
    "                <dt id=\"api\"><i class=\"fa fa-chevron-right\"></i>Does Unpaywall have an API?</dt>\n" +
    "                <dd>\n" +
    "                    Yes! We make all of Unpaywall's data available via the <a href=\"http://oadoi.org/about\">oaDOI API.</a>\n" +
    "                    The oaDOI service is currently used to enrich hundreds of academic libraries, search engines,\n" +
    "                    indexing services, and other tools; it's also used in many research and evaluation projects.\n" +
    "                </dd>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                <dt id=\"privacy-policy\"><i class=\"fa fa-chevron-right\"></i>What's your privacy policy?</dt>\n" +
    "                <dd>\n" +
    "                    The extension doesn't store or ask for any personal information from you, so when you use Unpaywall\n" +
    "                    we don't know who you are. The extension doesn't track your browsing history, and it\n" +
    "                    doesn't send any content from any page you visit to our servers, with one exception:\n" +
    "                    when a page has a DOI (a short identifier used by scholarly articles), we send that DOI\n" +
    "                    to our server (using an encrypted HTTPS connection) to find any free versions.\n" +
    "                    We will log requests to our servers\n" +
    "                    (which include the DOI and the IP address the request came from) in order to\n" +
    "                    monitor and improve service. But those logs aren't\n" +
    "                    connected to your identity. Furthermore, the extension won't send or use\n" +
    "                    any kind of browser fingerprinting technology to identify your computer.\n" +
    "                </dd>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                <dt id=\"identify-green-or-gold\"><i class=\"fa fa-chevron-right\"></i>Can Unpaywall tell me whether an article is \"Green\" or \"Gold\" OA?</dt>\n" +
    "                <dd>Indeed we can. Click the green Unpaywall extension icon in\n" +
    "                    your browser toolbar and choose \"Settings.\" Once there, tick \"Color-code tab for Green and Gold OA.\"\n" +
    "                    Thenceforth, you'll enjoy a veritable rainbow of OA colorfully goodness as you browse different articles:\n" +
    "                    <ul>\n" +
    "                        <li>\n" +
    "                            <div class=\"text\">\n" +
    "                                <span class=\"color gold\">Gold tab</span> for <a\n" +
    "                                    href=\"https://en.wikipedia.org/wiki/Open_access#Journals:_gold_open_access\">Gold OA</a>\n" +
    "                                articles available from a fully OA journal.\n" +
    "                                <a class=\"eg\" href=\"http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0000308\">(example)</a>\n" +
    "                            </div>\n" +
    "                        </li>\n" +
    "                        <li>\n" +
    "                            <div class=\"text\">\n" +
    "                                <span class=\"color green\">Green tab</span> for <a\n" +
    "                                    href=\"https://en.wikipedia.org/wiki/Self-archiving\">Green OA</a> articles on a preprint server or\n" +
    "                                institutional repository.\n" +
    "                                <a class=\"eg\" href=\"https://www.nature.com/nature/journal/v542/n7642/full/nature21360.html\">(example)</a>\n" +
    "                            </div>\n" +
    "                        </li>\n" +
    "                        <li>\n" +
    "                            <div class=\"text\">\n" +
    "                                <span class=\"color bronze\">Bronze tab</span> for <a\n" +
    "                                    href=\"https://peerj.com/preprints/3119v1/\">Bronze OA</a> articles free to read on the current page, but\n" +
    "                                published in a toll-access journal.\n" +
    "                                <a class=\"eg\" href=\"http://www.pnas.org/content/105/31/11014\">(example)</a>\n" +
    "\n" +
    "                            </div>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </dd>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "                <dt id=\"report-bugs\"><i class=\"fa fa-chevron-right\"></i>I found a bug</dt>\n" +
    "                <dd>\n" +
    "                    Sorry about that!\n" +
    "                    <a href=\"mailto:team@impactstory.org\">Drop us an email</a> and we'll get it fixed for you.\n" +
    "                </dd>\n" +
    "\n" +
    "            </dl>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"footer-container\" ng-include=\"'footer.tpl.html'\"></div>");
}]);

angular.module("footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("footer.tpl.html",
    "<div class=\"footer\">\n" +
    "    <div class=\"content\" layout=\"row\" layout-xs=\"column\">\n" +
    "\n" +
    "        <div class=\"links\" flex=\"40\" flex-xs=\"100\">\n" +
    "            <a href=\"mailto:team@impactstory.org\">\n" +
    "                <i class=\"fa fa-envelope-o\"></i>\n" +
    "            </a>\n" +
    "            <a href=\"http://twitter.com/unpaywall\">\n" +
    "                <i class=\"fa fa-twitter\"></i>\n" +
    "            </a>\n" +
    "            <a href=\"https://github.com/Impactstory/unpaywall\">\n" +
    "                <i class=\"fa fa-github\"></i>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <div class=\"logo\" flex=\"20\" hide-xs>\n" +
    "            <!--\n" +
    "            <a href=\"/\" ng-click=\"scrollToTop()\">\n" +
    "                <img src=\"static/img/icon-white.png\" alt=\"\">\n" +
    "            </a>\n" +
    "            -->\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <div class=\"credit\" flex=\"60\" flex-xs=\"100\">\n" +
    "            <span class=\"built-by\">\n" +
    "                Built with <i class=\"fa fa-heart-o\"></i> at\n" +
    "                <a href=\"faq#who-is-behind-this\">Impactstory</a>, with support from\n" +
    "            </span>\n" +
    "            <span class=\"funders\">\n" +
    "                 the National Science Foundation and the Alfred P. Sloan Foundation.\n" +
    "            </span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("header.tpl.html",
    "<div class=\"navbar\">\n" +
    "    <a href=\"/\">\n" +
    "        <img id=\"site-logo\" src=\"static/img/logo-green.png\" alt=\"\">\n" +
    "    </a>\n" +
    "    <div class=\"spacer\"></div>\n" +
    "\n" +
    "    <!--\n" +
    "    <a class=\"questions\" href=\"\" ng-click=\"scrollToAbout()\">\n" +
    "    </a>\n" +
    "    -->\n" +
    "\n" +
    "    <div class=\"links\">\n" +
    "        <a href=\"/\" class=\"install\" hide show--gt-xs>\n" +
    "            <i class=\"fa fa-plus-circle\"></i>\n" +
    "            Install\n" +
    "        </a>\n" +
    "        <a href=\"/faq\">\n" +
    "            <i class=\"fa fa-question-circle\"></i>\n" +
    "            FAQ\n" +
    "        </a>\n" +
    "        <a href=\"/\" class=\"home\">\n" +
    "            <i class=\"fa fa-home\"></i>\n" +
    "            home\n" +
    "        </a>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("landing.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("landing.tpl.html",
    "<div class=\"ti-page-header landing-page\" ng-include=\"'header.tpl.html'\"></div>\n" +
    "<div class=\"page landing\">\n" +
    "    <div class=\"top-screen screen\">\n" +
    "\n" +
    "\n" +
    "        <div class=\"top-screen-content\">\n" +
    "            <img class=\"screenshot\" src=\"static/img/browser-frame.png\" alt=\"\">\n" +
    "\n" +
    "            <div class=\"main-copy\">\n" +
    "                <div class=\"tagline\">\n" +
    "                    <div class=\"above\">\n" +
    "                        Read research papers for free.\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"about\">\n" +
    "                    <p>\n" +
    "                        Click the green tab and skip the paywall on millions of peer-reviewed journal articles.\n" +
    "                        It's fast, free, and legal.\n" +
    "                    </p>\n" +
    "                    <p class=\"button-info\" ng-show=\"browser=='unsupported'\">\n" +
    "                        Unpaywall requires the desktop edition of Firefox or Chrome.\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cta\">\n" +
    "                    <div class=\"install\" ng-click=\"ctaClick()\">\n" +
    "                        <span class=\"chrome\" ng-show=\"browser=='chrome'\">\n" +
    "                            Add to Chrome - It's free\n" +
    "                        </span>\n" +
    "                        <span class=\"firefox\" ng-show=\"browser=='firefox'\">\n" +
    "                            Add to Firefox - It's free\n" +
    "                            <span class=\"small\">via the Firefox web store</span>\n" +
    "                        </span>\n" +
    "                        <span class=\"fallback\" ng-show=\"browser=='unsupported'\">\n" +
    "                            <i class=\"fa fa-envelope-o\"></i>\n" +
    "                            Send myself a reminder to install later\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"about-users\">\n" +
    "                    <div class=\"rating\">\n" +
    "                        <span class=\"stars\">\n" +
    "                            <i class=\"fa fa-star\"></i>\n" +
    "                            <i class=\"fa fa-star\"></i>\n" +
    "                            <i class=\"fa fa-star\"></i>\n" +
    "                            <i class=\"fa fa-star\"></i>\n" +
    "                            <i class=\"fa fa-star\"></i>\n" +
    "                        </span>\n" +
    "                        <span class=\"light\">five-star rating on Chrome Web Store</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"num-users\">\n" +
    "                        <span class=\"num\">\n" +
    "                            116,492\n" +
    "                        </span>\n" +
    "                        <span class=\"light\">users on Chrome and Firefox have read millions of articles for free.</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"more\">\n" +
    "            <div class=\"content\">\n" +
    "                <i class=\"fa fa-chevron-down\"></i>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "    </div> <!-- end top screen -->\n" +
    "\n" +
    "\n" +
    "    <div class=\"social-proof\">\n" +
    "        <div class=\"quote\">\n" +
    "            <div class=\"content\">\n" +
    "                \"Must-have for anyone who wants access to the research literature.\"\n" +
    "            </div>\n" +
    "            <div class=\"attribution\">\n" +
    "                 &mdash;Andrew Treloar, <em>Australian National Data Service</em>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"logos\">\n" +
    "            <img src=\"static/img/nature.png\" alt=\"\">\n" +
    "            <img src=\"static/img/science.png\" alt=\"\">\n" +
    "            <img src=\"static/img/techcrunch.png\" alt=\"\">\n" +
    "            <img src=\"static/img/gizmodo.png\" class=\"gizmodo\" alt=\"\">\n" +
    "            <img src=\"static/img/chronicle.png\" class=\"chronicle\" alt=\"\">\n" +
    "        </div>\n" +
    "        \n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"benefit legal\">\n" +
    "        <img src=\"static/img/seal-check.png\" class=\"illustration\" alt=\"\">\n" +
    "        <div class=\"copy\">\n" +
    "            <h2>Legal, fair, and sustainable</h2>\n" +
    "            <p>\n" +
    "                Millions of research papers are available for free on government and university web servers, legally  uploaded by the authors themselves, with the express permission of publishers. Often authors are legally <em>required</em> to make government-funded research freely-accessible. Unpaywall automatically harvests these freely shared papers from thousands of legal institutional repositories, preprint servers, and publishers, making them all availabe to you as you read.\n" +
    "            </p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"benefit effective\">\n" +
    "        <div class=\"copy\">\n" +
    "            <h2>Access millions of research articles, instantly</h2>\n" +
    "            <p>\n" +
    "                Unpaywall users are able to read over <strong>52%</strong> of research papers for free--without having to pay money, fuss with a VPN, or use pirate sites like Sci-Hub. That's because we're built on a database of millions of open-access articles harvested from thousands of servers worldwide.   When you browse to a paywalled paper, we check to see if we have a free copy. If we do, you'll see a green tab...just click, and read.\n" +
    "            </p>\n" +
    "\n" +
    "        </div>\n" +
    "        <img src=\"static/img/many-articles.png\" class=\"illustration\" alt=\"\">\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"testimonials-section\">\n" +
    "        <div class=\"testimonials-header\">\n" +
    "            <h2>What people are saying about Unpaywall:</h2>\n" +
    "        </div>\n" +
    "        <div class=\"testimonials\">\n" +
    "            <div class=\"testimonial\">\n" +
    "                <img src=\"static/img/tom.jpg\" alt=\"\">\n" +
    "                <div class=\"copy\">\n" +
    "                    Yesterday I found Unpaywall, and my life changed.  I've already gotten 4 publications by clicking on the Mystical Green Padlock...Thank you, from the heart.\n" +
    "                    <div class=\"attribution\">\n" +
    "                        <div class=\"name\">&mdash;Tom Mueller,</div>\n" +
    "                        <div class=\"job\">Freelance Author</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"testimonial\">\n" +
    "                <img src=\"static/img/jon.jpg\" alt=\"\">\n" +
    "                <div class=\"copy\">\n" +
    "                    Way, way, WAY easier than having to be at a place with institutional access, using a VPN, emailing authors, using inter-library loan...\n" +
    "                    <div class=\"attribution\">\n" +
    "                        <div class=\"name\">&mdash;Jon Tennant,</div>\n" +
    "                        <div class=\"job\">Paleontologist</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"testimonial\">\n" +
    "                <img src=\"static/img/stacy.jpg\" alt=\"\">\n" +
    "                <div class=\"copy\">\n" +
    "                    Unpaywall makes it really easy to (legally!) find free versions of journal articles.\n" +
    "                    <div class=\"attribution\">\n" +
    "                        <div class=\"name\">&mdash;Stacy Konkiel,</div>\n" +
    "                        <div class=\"job\">Altmetric</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"footer-container\" ng-include=\"'footer.tpl.html'\"></div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("page-not-found.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("page-not-found.tpl.html",
    "<div class=\"landing static-page\">\n" +
    "    <h1>Sorry, we couldn't find that page!</h1>\n" +
    "\n" +
    "</div>");
}]);

angular.module("welcome.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("welcome.tpl.html",
    "<div class=\"ti-page-header welcome\" ng-include=\"'header.tpl.html'\"></div>\n" +
    "<div class=\"page welcome\">\n" +
    "    <div class=\"content\">\n" +
    "\n" +
    "        <img id=\"screenshot\" src=\"static/img/laptop-screenshot.png\" alt=\"\">\n" +
    "        <p>\n" +
    "            Welcome to Unpaywall! When you see the\n" +
    "            <span class=\"tab-color green\">green tab</span>\n" +
    "            beside a research article,\n" +
    "            click it to read the full text. Try this example:\n" +
    "        </p>\n" +
    "        <p class=\"eg\">\n" +
    "            <a class=\"eg\" target=\"_blank\" href=\"http://www.nature.com/nature/journal/v542/n7642/full/nature21360.html\">\n" +
    "                <i class=\"fa fa-file-text-o\"></i>\n" +
    "                Try it now\n" +
    "            </a>\n" +
    "        </p>\n" +
    "        <p>\n" +
    "            <!--\n" +
    "            That article will cost you $32 to read on Nature.com...except now that\n" +
    "            you've got Unpaywall, it's free!\n" +
    "            -->\n" +
    "\n" +
    "            You'll see our green tab on about half of articles\n" +
    "            (if we can't find fulltext, you'll see a\n" +
    "            <span class=\"tab-color gray\">gray tab</span>\n" +
    "\n" +
    "            ). Happy reading!\n" +
    "\n" +
    "        </p>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <p class=\"ps\">\n" +
    "            PS for the Open Access nerds: the Unpaywall tab\n" +
    "            can change colors to indicate Green or Gold OA, too. Enable it in settings.\n" +
    "            You might also enjoy\n" +
    "            <a href=\"https://peerj.com/preprints/3119v1/\">our recent paper</a>\n" +
    "            analyzing trends in OA and the coverage\n" +
    "            of Unpaywall.\n" +
    "        </p>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"footer-container\" ng-include=\"'footer.tpl.html'\"></div>\n" +
    "");
}]);
