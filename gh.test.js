let page;

describe("Github page tests", () => {

    describe("initial tests", () => {

        beforeEach(async () => {
            page = await browser.newPage();
            await page.goto("https://github.com/team");
        });

        afterEach(() => {
            page.close();
        });

        test("The h1 header content'", async () => {
            const firstLink = await page.$("header div div a");
            await firstLink.click();
            await page.waitForSelector('h1');
            const title2 = await page.title();
            expect(title2).toEqual('GitHub: Where the world builds software · GitHub');
        }, 60000);

        test("The first link attribute", async () => {
            const actual = await page.$eval("a", link => link.getAttribute('href') );
            expect(actual).toEqual("#start-of-content");
        }, 60000);

        test("The page contains Sign in button", async () => {
            const btnSelector = ".btn-large-mktg.btn-mktg";
            await page.waitForSelector(btnSelector, {
                visible: true,
            });
            const actual = await page.$eval(btnSelector, link => link.textContent);
            expect(actual).toContain("Sign up for free")
        }, 60000);
    })

    describe("My tests for page Explore", () => {

        beforeEach(async () => {
            page = await browser.newPage();
            await page.goto("https://github.com/explore");
        });

        afterEach(() => {
            page.close();
        });

        test("The h1 header content'", async () => {
            const selector = await page.$("a:nth-child(4)");
            await selector.click();
            await page.waitForSelector('h1');
            const title = await page.title();
            expect(title).toEqual('Trending repositories on GitHub today · GitHub');
        }, 60000);
    });

    describe("My tests for page Enterprise", () => {

        beforeEach(async () => {
            page = await browser.newPage();
            await page.goto("https://github.com/enterprise");
        });

        afterEach(() => {
            page.close();
        });

        test("The h1 header content'", async () => {
            await page.waitForSelector('h1');
            const title = await page.title();
            expect(title).toEqual('Enterprise · A smarter way to work together · GitHub');
        }, 60000);
    });

    describe("My tests for page Marketplace", () => {

        beforeEach(async () => {
            page = await browser.newPage();
            await page.goto("https://github.com/marketplace");
        });

        afterEach(() => {
            page.close();
        });

        test("The h1 header content'", async () => {
            const selector = await page.$("div.container-lg.p-responsive.text-center.text-md-left > div > div > a");
            await selector.click();
            await page.waitForSelector('h1');
            const title = await page.title();
            expect(title).toEqual('GitHub Marketplace · Tools to improve your workflow · GitHub');
        }, 60000);
    });

    describe("My tests for Netology", () => {

        beforeEach(async () => {
            page = await browser.newPage();
            await page.goto("https://netology.ru/");
        });

        afterEach(() => {
            page.close();
        });

        test("The h1 header content'", async () => {
            const selector = await page.$("a.src-shared-components-Header--link--yx1Hg.src-shared-components-Header--hideMdDown--GIrXY");
            await selector.click();
            await page.waitForSelector('h1');
            const title = await page.title();
            expect(title).toEqual('Бесплатные онлайн курсы, вебинары и гайды – обучение в Нетологии');
        }, 60000);
    });
});
