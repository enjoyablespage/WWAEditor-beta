function MessageSetting() {
  var NoMoney = prompt("お金がないときのメッセージ", "所持金が足りない。");
  var Noitem = prompt("アイテムがないときのメッセージ", "アイテムを持っていない。");
  var Clickitem = prompt("クリックで使用するアイテムを初めて取得した時のメッセージ", "このアイテムはクリックで使用できます。使用できるアイテムは赤枠で囲われます。");
  var Itemuse = prompt("アイテムを使用する時のメッセージ", "このアイテムを使用しますか？");
  var URLgate = prompt("URLゲートでジャンプするときのメッセージ", "別のサイトへ飛びます。よろしいですか？");
  var Fullitem = prompt("アイテムがいっぱいの時のメッセージ", "これ以上、アイテムを持てません。");
  var Defend = prompt("攻撃が効かないの時のメッセージ", "相手の防御能力が高すぎる！");
  var Musicload = prompt("音楽を読み込むときのメッセージ", "効果音を読み込みますか？");
}
