class SiteBuilder < Bridgetown::Builder
  # write builders which subclass SiteBuilder in plugins/builder
  include Graphtown::QueryBuilder
end

