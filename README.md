# Angular2-SharePoint-SPA
SharePoint Online Single Page App With Angular2 and Webpack

This is a fork from https://github.com/AshokRajaT/Angular2-SharePoint-SPA but with problems fixed and dependencies upgraded :-)

This example is also explain in detail a blog series:

1. http://www.ashokraja.me/post/SharePoint-Online-Single-Page-App-With-Angular2-and-Webpack-SP-Ng2-SPA-Part-1.aspx
2. http://www.ashokraja.me/post/SharePoint-list-data-CRUD-operation-with-PnP-Core-Js-and-Angular2-SP-Ng2-SPA-Part-2.aspx
3. http://www.ashokraja.me/post/Angular2-routing-inside-SitePages-Document-Library-in-SharePoint-Online-SP-Ng2-SPA-Part-3.aspx
4. http://www.ashokraja.me/post/Webpack-configuration-settings-for-development-and-production-build-of-SharePoint-Single-Page-App-with-Angular-2-SP-Ng2-SPA-Part-4.aspx
5. http://www.ashokraja.me/post/Source-code-and-deployment-steps-for-Angular2-Single-Page-App-with-SP-PnP-Js-for-SharePoint-SP-Ng2-SPA-Part-5.aspx

This angular web application is supposed to play with a Sharepoint List named `Employee` and it should contains the columns listed in [app.entities.ts](./src/shared/app.entities.ts).

## How to deploy it in Sharepoint

You should first have [node](https://nodejs.org/) and [yarn](https://yarnpkg.com/) installed on your machine.

1. Modify your site url in [app.settings.ts](./src/app.settings.ts)
2. In [Employee.aspx](./src/Employee.aspx), adapt `<base ref="..." />` to your Sharepoint relative location where you will deploy this application.
3. Build the application by running the command `yarn install && yarn build`
4. Copy the content of `dist` folder to your Sharepoint site location.
5. Navigate to your application: https://<sharepoint_site>/<site_location>/Employee.aspx