using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Serialization;
using System.IO;
using System.Text.Encodings.Web;

namespace ngCoreShelterCRM
{
    public class Startup
    {

        readonly IHostingEnvironment HostingEnvironment;

        IConfigurationRoot Configuration { get; }

        public Startup(IHostingEnvironment env)
        {
            HostingEnvironment = env;

            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            Configuration = builder.Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<IConfigurationRoot>(Configuration);
            services.AddSingleton<IConfiguration>(Configuration);

            // Add framework services
            services.AddMvc(options =>
            {
                // options.Filters.Add(new ApiExceptionFilter());
            })
            .AddJsonOptions(opt =>
            {
                var resolver = opt.SerializerSettings.ContractResolver;
                if (resolver != null)
                {
                    var res = resolver as DefaultContractResolver;
                    res.NamingStrategy = null;
                }
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env,
          ILoggerFactory loggerFactory,
          IConfiguration configuration)
        {
            //Log.Logger = new LoggerConfiguration()
            //       .WriteTo.RollingFile(pathFormat: "logs\\log-{Date}.log")
            //       .CreateLogger();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler(errorApp =>

                                     // Application level exception handler here - this is just a place holder
                                     errorApp.Run(async (context) =>
                                     {
                                         context.Response.StatusCode = 500;
                                         context.Response.ContentType = "text/html";
                                         await context.Response.WriteAsync("<html><body>\r\n");
                                         await context.Response.WriteAsync(
                                                 "We're sorry, we encountered an un-expected issue with your application.<br>\r\n");

                                         // Capture the exception
                                         var error = context.Features.Get<IExceptionHandlerFeature>();
                                         if (error != null)
                                         {
                                             // This error would not normally be exposed to the client
                                             await
                                                              context.Response.WriteAsync("<br>Error: " +
                                                                                          HtmlEncoder.Default.Encode(error.Error.Message) +
                                                                                          "<br>\r\n");
                                         }
                                         await context.Response.WriteAsync("<br><a href=\"/\">Home</a><br>\r\n");
                                         await context.Response.WriteAsync("</body></html>\r\n");
                                         await context.Response.WriteAsync(new string(' ', 512)); // Padding for IE
                                     }));

                //loggerFactory.AddConsole();
                //app.UseExceptionHandler("/");
                //app.UseExceptionHandler("/Home/Error");
            }

            app.UseDefaultFiles(); // so index.html is not required
            app.UseStaticFiles();
            //Courtesy of https://blog.markvincze.com/secure-an-asp-net-core-api-with-firebase/
            app.UseJwtBearerAuthentication(new JwtBearerOptions
            {
                AutomaticAuthenticate = true,
                Authority = "https://securetoken.google.com/ngCoreShelterCRM",
                TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidIssuer = "https://securetoken.google.com/ngCoreShelterCRM",
                    ValidateAudience = true,
                    ValidAudience = "ngCoreShelterCRM",
                    ValidateLifetime = true
                }
            });

            // put last so header configs like CORS or Cookies etc can fire
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });

        }
    }
}
