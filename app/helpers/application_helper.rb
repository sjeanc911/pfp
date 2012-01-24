module ApplicationHelper

   def base_url
<<JAVASCRIPT
          window._uni_prot_release_path = "#{uni_prot_release_index_path}";
JAVASCRIPT
   end

end
