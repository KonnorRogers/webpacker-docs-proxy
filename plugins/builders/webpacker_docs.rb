class WebpackerDocs < SiteBuilder
  # does not work
  # graphql :docs do
  #   query {
  #     repository(owner: "rails", name: "webpacker") {
  #       object(expression: "master:docs/") {
  #         ... on Tree {
  #           entries {
  #             name
  #           }
  #         }
  #       }
  #     }
  #   }
  # end

  # Works
  graphql :docs do
    query {
      repository(owner: "rails", name: "webpacker") {
        object(expression: "master:docs/") {
          id
        }
      }
    }
  end

  def build
    p queries.docs.repsository
    # queries.docs.repository.object.entries do |entry|
    #   p entry
    #   slug = Bridgetown::Utils.slugify(entry.name)
    #   entry_url = entry.repository.url + "/" + entry.path
    #   puts entry.object.text

    #   doc "#{slug}.md" do
    #     collections "docs"
    #     layout "doc"
    #     title entry.name
    #     github_url entry_url
    #     # content entry.object.text
    #     date Time.new
    #   end
    # end
  end

  def graphql_endpoint
    "https://api.github.com/graphql"
  end

  def configure_graphql_client(client)
    require "dotenv"
    Dotenv.load(".env")
    client.options[:headers] = {
      "Authorization" => "bearer #{ENV["GITHUB_API_TOKEN"]}"
    }
  end
end
