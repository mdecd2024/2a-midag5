var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"./pages/about/"},{"title":"2024 Spring 課程 W2","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 協同產品設計實習的第二週, 主要利用 Github Classroom 進行協同分組, 並引導學員除了 Replit, 可以利用 Github Codespaces 維護個人或分組網站內容. 利用 Github Classroom 指定分組倉儲 由於各分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH. 根據上述流程, 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版全縣, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. 範例分組倉儲: https://github.com/mdecd2024/test-ag1 期中分組作業名稱甲班為 2a, 其中甲班第一組組長必須建立名稱為 midag1 的 Team, 讓第一組的組員員加入. 其餘各組的期中報告 Team 名稱則分別為 midag2, midag3 .... 根據上述規劃, 甲班第一分組的期中協同倉儲將位於: https://github.com/mdecd2024/2a-midag1, 第一組的期中報告網站將位於: https://mdecd2024.github.io/2a-midag1. 說明甲班第一組組長如何建立 midag1 Team, 並利用 Codespaces 維護 2a-midag1 分組倉儲 說明如何利用 Replit 管理從 Classroom 取得的分組倉儲 待各分組的期中報告 Team 與倉儲全部建立就緒後, 則甲班學員後續可配合期末作業名稱 2a2, 由甲班各組組長建立 Team finalag1, finalag2 ....等. 利用 Codespaces 維護倉儲與網站 說明如何利用 Github Codespaces 維護網站內容 由於 Github Codespaces 免費帳號目前每月可以使用 120 core hours, 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours. 在近端執行動態網站 說明如何利用近端可攜系統維護分組網站 ODOO 參考資料 https://www.google.com/search?q=sap+vs+odoo (與 SAP 及 ODOO 有關的搜尋) 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf or local download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析)","tags":"misc","url":"./2024-Spring-w2-blog-tutorial.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2024-Spring-w1-blog-tutorial.html"}]};