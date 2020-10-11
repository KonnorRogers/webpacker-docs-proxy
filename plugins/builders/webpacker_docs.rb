class WebpackerDocs < SiteBuilder
  graphql :docs do <<~GQL
    query {
      repository(owner: "rails", name: "webpacker") {
        object(expression: "master:docs/") {
          ... on Tree {
            entries {
              repository {
                url
                updatedAt
              }
              name
              path
              object {
                ... on Blob {
                  text
                }
              }
            }
          }
        }
      }
    }
    GQL
  end

  def build
    queries.docs.repository.object.entries do |entry|
      slug = Bridgetown::Utils.slugify(entry.name)
      entry_url = entry.repository.url + "/" + entry.path

      doc "#{slug}.md" do
        collections "docs"
        layout "doc"
        title entry.name
        github_url entry_url
        content entry.object.text
        date Time.new
      end
    end
  end
end
