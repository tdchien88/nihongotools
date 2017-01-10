var listTuVung = [
{'kanji' :'お父さん', 'ans':'おとうさん - Cha (của người khác)'},
{'kanji' :'お母さん', 'ans':'おかあさん - Mẹ (của người khác)'},
{'kanji' :'お姉さん', 'ans':'おねえさん - chị gái (của người khác)'},
{'kanji' :'妹さん', 'ans':'いもうとさん - em gái (của người khác)'},
{'kanji' :'両親', 'ans':'りょうしん - cha mẹ'},
{'kanji' :'兄弟', 'ans':'きょうだい - anh em'},
{'kanji' :'上の兄', 'ans':'うえのあに - anh lớn'},
{'kanji' :'下の兄', 'ans':'したのあに - anh kế'},
{'kanji' :'ご主人', 'ans':'ごしゅじん - chồng (của người khác)'},
{'kanji' :'奥さん', 'ans':'おくさん - vợ (của người khác)'},
{'kanji' :'専業主婦', 'ans':'せんぎょうしゅふ - nội trợ'},
{'kanji' :'仕事', 'ans':'しごと - công việc'},
{'kanji' :'教師', 'ans':'きょうし - giáo viên'},
{'kanji' :'小学校', 'ans':'しょうがっこう - trường tiểu học'},
{'kanji' :'小学生', 'ans':'しょうがくせい - học sinh tiểu học'},
{'kanji' :'小学生３年生', 'ans':'しょうがくせい３ねんせい - học sinh lớp 3'},
{'kanji' :'医者', 'ans':'いしゃ - bác sỹ'},
{'kanji' :'内科', 'ans':'ないか - nội khoa'},
{'kanji' :'貿易', 'ans':'ぼうえき - thương mại'},
{'kanji' :'工場', 'ans':'こうじょう - nhà máy xưởng'},
{'kanji' :'退職', 'ans':'たいしょく - nghỉ hưu'},
{'kanji' :'住む', 'ans':'すむ - cư trú'},
{'kanji' :'勤める', 'ans':'つとめる - làm việc'},
{'kanji' :'働く', 'ans':'はたらく - làm việc'},
{'kanji' :'一人ずつ', 'ans':'ひとりずつ - từng người 1'},
{'kanji' :'二人とも', 'ans':'ふたりとも - cả 2'},
{'kanji' :'二人で', 'ans':'ふたりで - 2 người'},
{'kanji' :'のんびり', 'ans':'のんびり - thảnh thơi'},
{'kanji' :'お弁当', 'ans':'おべんとう - cơm hộp'},
{'kanji' :'お弁当屋', 'ans':'おべんとうや - tiệm cơm hộp'},
{'kanji' :'時給', 'ans':'じきゅう - lương giờ'},
{'kanji' :'週に三日', 'ans':'しゅうにみっか - tuần 3 ngày'},
{'kanji' :'新聞', 'ans':'しんぶん - báo'},
{'kanji' :'書類', 'ans':'しょるい - tài liệu'},
{'kanji' :'経理', 'ans':'けいり - kế toán'},
{'kanji' :'整理', 'ans':'せいり - chỉnh sửa'},
{'kanji' :'ソフト', 'ans':'ソフト - phần mềm'},
{'kanji' :'タイ料理', 'ans':'タイりょうり - món ăn Thái'},
{'kanji' :'ダンス', 'ans':'ダンス - khiêu vũ'},
{'kanji' :'ステージ', 'ans':'ステージ - sân khấu'},
{'kanji' :'夕方', 'ans':'ゆうがた - buổi chiều'},
{'kanji' :'夜中', 'ans':'よなか - buổi tối'},
{'kanji' :'打つ', 'ans':'うつ - đánh'},
{'kanji' :'教える', 'ans':'おしえる - dạy học'},
{'kanji' :'配る', 'ans':'くばる - phân phát'},
{'kanji' :'探す', 'ans':'さがす - tìm kiêm'},
{'kanji' :'お金', 'ans':'おかね - tiền'},
{'kanji' :'外国人', 'ans':'がいこくじん - người nước ngoài'},
{'kanji' :'牛乳', 'ans':'ぎゅうにゅう - sữa bò'},
{'kanji' :'すき焼き', 'ans':'すきやき - thịt nướng'},
{'kanji' :'しゃぶしゃぶ', 'ans':'しゃぶしゃぶ - món shabushabu (món lẩu có thịt cắt lát mỏng)'},
{'kanji' :'剣道', 'ans':'けんどう - kiếm đạo'},
{'kanji' :'柔道', 'ans':'じゅうどう - nhu đạo'},
{'kanji' :'七夕', 'ans':'たなばた - Ngày Ngưu Lang Chức Nữ'},
{'kanji' :'ノートパソコン', 'ans':'ノートパソコン - máy tính xách tay'},
{'kanji' :'電子辞書', 'ans':'でんしじしょ - kim từ điển'},
{'kanji' :'DVDレコーダー', 'ans':'DVDレコーダー - Ghi dvd'},
{'kanji' :'一人暮らし', 'ans':'ひとりぐらし - sống 1 mình'},
{'kanji' :'ペット', 'ans':'ペット - con vật nuôi'},
{'kanji' :'紅葉', 'ans':'こうよう - lá đỏ'},
{'kanji' :'機能', 'ans':'きのう - tính năng'},
{'kanji' :'最近', 'ans':'さいきん - gần đây'},
{'kanji' :'他の', 'ans':'ほかの - ngoài ra'},
{'kanji' :'物', 'ans':'もの - đồ vật'},
{'kanji' :'寂しい', 'ans':'さびしい - buồn'},
{'kanji' :'欲しい', 'ans':'ほしい - muốn'},
{'kanji' :'好き', 'ans':'すき - thích'},
{'kanji' :'例えば', 'ans':'たとえば - ví dụ'},
{'kanji' :'ファッション', 'ans':'ファッション - thời trang'},
{'kanji' :'アパレル', 'ans':'アパレル - phục trang'},
{'kanji' :'自分で', 'ans':'じぶんで - tự mình'},
{'kanji' :'米', 'ans':'こめ - gạo'},
{'kanji' :'農業', 'ans':'のうぎょう - nông nghiệp'},
{'kanji' :'文化', 'ans':'ぶんか - văn hóa'},
{'kanji' :'子供', 'ans':'こども - trẻ em'},
{'kanji' :'幼稚園', 'ans':'ようちえん - trường mẫu giáo'},
{'kanji' :'旅行ガイド', 'ans':'りょこうガイド - hdv du lịch'},
{'kanji' :'通訳', 'ans':'つうやく - thông dịch'},
{'kanji' :'理由', 'ans':'りゆう - lý do'},
{'kanji' :'将来', 'ans':'しょうらい - tương lai'},
{'kanji' :'頑張る', 'ans':'がんばる - cố gắng'},
{'kanji' :'一生懸命', 'ans':'いっしょうけんめい - nỗ lực'},
{'kanji' :'思う', 'ans':'おもう - suy nghĩ'},
{'kanji' :'コンピューター関係', 'ans':'コンピューターかんけい - liên quan máy tính'},
{'kanji' :'決まっていません', 'ans':'きまっていません - chưa quyết định'},
{'kanji' :'興味', 'ans':'きょうみ - hứng thú'},
{'kanji' :'案内', 'ans':'あんない - hướng dẫn'},
{'kanji' :'家内', 'ans':'かない - vợ tôi'},
{'kanji' :'旅行客', 'ans':'りょこうきゃく - khách du lịch'},
{'kanji' :'趣味', 'ans':'しゅみ - sở thích'},
{'kanji' :'食品会社', 'ans':'しょくひんがいしゃ - công ty thực phẩm'},
{'kanji' :'手料理', 'ans':'てりょうり - thức ăn tự nấu'},
{'kanji' :'酢豚', 'ans':'すぶた - thịt heo xào chua ngọt (món TQ)'},
{'kanji' :'マーボー豆腐', 'ans':'マーボーとうふ - đậu hủ ma bà (món TQ)'},
{'kanji' :'ガイド', 'ans':'ガイド - hướng dẫn'},
{'kanji' :'初めて', 'ans':'はじめて - lần đầu'},
{'kanji' :'ですから', 'ans':'ですから - vì'},
];