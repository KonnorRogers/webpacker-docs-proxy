require "base64"
class WebpackerDocs < SiteBuilder
 def connection(headers: {}, parse_json: true)
    retry_options = {
      max: 2,
      interval: 0.05,
      interval_randomness: 0.5,
      backoff_factor: 2
    }

    super do |faraday|
      faraday.request :retry, retry_options
      faraday.basic_auth(ENV["GITHUB_USER"], ENV["GITHUB_API_TOKEN"])
    end
  end

  def build

    url = "https://api.github.com/repos/rails/webpacker"
    readme_url = "#{url}/contents/README.md"

    get readme_url do |page|
      page_title = page["name"]
      slug = page_title
      git_url = page["html_url"]

      body = nil
      get(page["url"]) do |file|
        return if file["content"].nil?

        body = Base64.decode64(file["content"]).force_encoding("UTF-8")
      end

      doc "index.md" do
        layout "home"
        collection "gh_docs"
        title page_title
        github_url git_url
        content body
        permalink "/"
      end
    end

    docs_url = "#{url}/contents/docs"
    get(docs_url) do |data|
      data.each do |page, _|
        # next if page["type"]&.to_sym != :file

        page_title = page["name"]
        git_url = page["html_url"]

        body = nil
        get(page["url"]) do |file|
          next if file["content"].nil?

          body = Base64.decode64(file["content"]).force_encoding("UTF-8")
        end

        doc page_title do
          layout "doc"
          collection "gh_docs"
          title page_title
          github_url git_url
          content body
        end
      end
    end
  end
end
