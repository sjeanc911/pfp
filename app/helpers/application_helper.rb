module ApplicationHelper

   def base_url
<<JAVASCRIPT
          window._uni_prot_releases_path = "#{uni_prot_releases_path}";
JAVASCRIPT
   end

end
