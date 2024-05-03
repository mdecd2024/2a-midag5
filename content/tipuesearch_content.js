var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:  https://mdecd2024.github.io/2a-midag5/content/index.html \n 網誌:  https://mdecd2024.github.io/2a-midag5/blog/index.html \n 簡報:  https://mdecd2024.github.io/2a-midag5/reveal/index.html \n 倉儲:\xa0 https://github.com/mdecd2024/2a-midag5 \n \n 40923116\xa0 個人倉儲 \xa0 個人網站 \n 40923118\xa0 個人倉儲 \xa0 個人網站 \n 40923154\xa0 個人倉儲 \xa0 個人網站 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'Onshape', 'text': '40923116 \n 40923154 \n 40923131 \n', 'tags': '', 'url': 'Onshape.html'}, {'title': 'latex', 'text': '', 'tags': '', 'url': 'latex.html'}, {'title': '翻譯分配', 'text': '40823143 10-20 \n 40923116 21-30 \n 40923118 31-40 \n 40923131 41-50 \n 40923124 51-60 \n 40923244  61-70 \n 40923154 71-80 \n \n 40923154 \n 41023246 \n \n', 'tags': '', 'url': '翻譯分配.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Codespaces', 'text': '', 'tags': '', 'url': 'Codespaces.html'}, {'title': 'Replit', 'text': '若要改版,必須確定 /home/runner/.ssh目錄下 有id_rsa與config \n 若要Replit維護分組網站內容,必須要動態設定 .ssh下的 id_rsa與config \n https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'W4', 'text': '', 'tags': '', 'url': 'W4.html'}, {'title': '第一週影片', 'text': '', 'tags': '', 'url': '第一週影片.html'}, {'title': '建立個人課程倉儲與網站', 'text': '影片 \xa0 \xa0 逐字稿 \n ------------------ \n 摘要 \n 建立個人倉儲 與網站 登入個人github後 在taems中 利用老師給的連結 https://github.com/mdecycu/cmsimde_site 建立名稱為cd2024的個人倉儲 並建議在說明欄內填入"協同產品設計實習的個人課程網頁" 最後在設定內進入 Pages 設定main 並儲存 \n \n', 'tags': '', 'url': '建立個人課程倉儲與網站.html'}, {'title': '如何從 Replit Account 設定 Connect 連結到 Github', 'text': '影片  \xa0\xa0 逐字稿 \n ----------------- \n 摘要 \n 登入個人github 並和replit連動登入 進入reolit中的Profile 並取的github的連結 他會在github中安裝程式 授權之後等它安裝好就完成了 可在github中的設定內進入Application 若看到replit哲帶扁兩邊是信任的 \n \n', 'tags': '', 'url': '如何從 Replit Account 設定 Connect 連結到 Github.html'}, {'title': '如何設定 Github 帳號的雙重認證', 'text': '影片  \xa0\xa0 逐字稿 \n ---------------- \n 摘要 \n 登入github 在設定內進入 Password and authentication(密碼和認證) 在底下綁定個人手機/手錶(在帳號建立後有45天的時間可以綁定)\xa0 \n \n', 'tags': '', 'url': '如何設定 Github 帳號的雙重認證.html'}, {'title': '說明如何將倉儲 import 至 Replit 改版後推回 github', 'text': '影片 \xa0  逐字稿 \n ------------- \n 摘要 \n \n', 'tags': '', 'url': '說明如何將倉儲 import 至 Replit 改版後推回 github.html'}, {'title': 'blog_setup', 'text': '影片 \xa0  逐字稿 \n ---------------- \n 摘要 \n \n', 'tags': '', 'url': 'blog_setup.html'}, {'title': 'odoo_plm簡介', 'text': '------------------ \n 影片 \xa0  逐字稿 \n 摘要 \n \n', 'tags': '', 'url': 'odoo_plm簡介.html'}, {'title': '第二週影片', 'text': '', 'tags': '', 'url': '第二週影片.html'}, {'title': 'cd2024_2a_w2_3 如何建立各組的 Team midag1 並利用 Codespaces 維護內容', 'text': '影片 \xa0 \xa0 逐字稿 \n ------------------ \n 摘要 \n \n', 'tags': '', 'url': 'cd2024_2a_w2_3 如何建立各組的 Team midag1 並利用 Codespaces 維護內容.html'}, {'title': 'cd2024_2a_w2_4_利用\xa0 Replit 管理 Github Classroom 分組倉儲', 'text': '影片 \xa0  逐字稿 \n ------------------ \n 摘要 \n \n', 'tags': '', 'url': 'cd2024_2a_w2_4_利用\xa0 Replit 管理 Github Classroom 分組倉儲.html'}, {'title': 'cd2024_2a_w2_5 如何利用近端可攜環境與外部 IPv4 開啟動態網站 影片字幕', 'text': '\n', 'tags': '', 'url': 'cd2024_2a_w2_5 如何利用近端可攜環境與外部 IPv4 開啟動態網站 影片字幕.html'}, {'title': 'cd2024_2b_7_w2 利用 codespaces 維護分組網站', 'text': '影片\xa0   逐字稿 \n ------------------ \n 摘要 \n \n', 'tags': '', 'url': 'cd2024_2b_7_w2 利用 codespaces 維護分組網站.html'}, {'title': '第三週影片', 'text': '', 'tags': '', 'url': '第三週影片.html'}, {'title': 'cd2024_2a_w3_如何將學員倉儲設為分組倉儲的子模組', 'text': '影片 \xa0  逐字稿 \n ------------------ \n 摘要 \n \n', 'tags': '', 'url': 'cd2024_2a_w3_如何將學員倉儲設為分組倉儲的子模組.html'}, {'title': 'cd2024_2a_w3_利用分組協同建立 LaTeX 報告', 'text': '影片   \xa0逐字稿 \n ------------------ \n 摘要 \n \n', 'tags': '', 'url': 'cd2024_2a_w3_利用分組協同建立 LaTeX 報告.html'}, {'title': 'cd2024_2b_w3_使用 gitpod 與 localhost 維護個人倉儲', 'text': '影片 \xa0  逐字稿 \n ------------------ \n 摘要 \n \n', 'tags': '', 'url': 'cd2024_2b_w3_使用 gitpod 與 localhost 維護個人倉儲.html'}, {'title': 'wcm2024_1a_w3_2_將組員的個人倉儲納為分組倉儲的子模組', 'text': '影片  \xa0 逐字稿 \n ------------------ \n 摘要 \n \n', 'tags': '', 'url': 'wcm2024_1a_w3_2_將組員的個人倉儲納為分組倉儲的子模組.html'}, {'title': 'wcm2024_1a_w3_3_如何在 replit 自設 .ssh 維護分組倉儲', 'text': '影片 \xa0  逐字稿 \n ------------------ \n 摘要 \n \n', 'tags': '', 'url': 'wcm2024_1a_w3_3_如何在 replit 自設 .ssh 維護分組倉儲.html'}, {'title': '第四週影片', 'text': '', 'tags': '', 'url': '第四週影片.html'}, {'title': 'wcm2024_5j_w4_2_如何在 Replit 執行靜態網站檢視', 'text': '影片  \xa0  逐字稿 \n ------------------ \n 摘要 \n \n', 'tags': '', 'url': 'wcm2024_5j_w4_2_如何在 Replit 執行靜態網站檢視.html'}, {'title': 'wcm2024_5j_w4_3 如何在倉儲中建立 main2 與 static python 檔案', 'text': '影片 \xa0  逐字稿 \n ------------------ \n 摘要 \n \n', 'tags': '', 'url': 'wcm2024_5j_w4_3 如何在倉儲中建立 main2 與 static python 檔案.html'}, {'title': '期中報告', 'text': '40923116\xa0 https://youtu.be/HumKHWamrDs?si=hfee7KpejwpYgHSU \n \n', 'tags': '', 'url': '期中報告.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};