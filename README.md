# starlive2d-demo

[ExceptionError/starlive2d](https://github.com/ExceptionError/starlive2d) を利用した動作デモです。

## セットアップ

1. [Live2D 公式の SDK](https://www.live2d.com/download/cubism-sdk/download-web/) をダウンロードする
2. [Live2D/CubismWebFramework](https://github.com/Live2D/CubismWebFramework) を clone する
3. [ExceptionError/starlive2d](https://github.com/ExceptionError/starlive2d) を clone してビルドしておく
4. 以下のようなディレクトリ構造になるように配置する

```
- Core: [1]でダウンロードしたSDKのCoreをコピー
- Resources: [1]でダウンロードしたSDKのSamples/Resourcesをコピー
- cubism: [2]でcloneしたフレームワーク
- starlive2d: [3]でcoloneしたフレームワーク
- starlive2d-demo: これ
```

5. `yarn install`
6. `yarn build`

## 補足

ディレクトリ構成は [tsconfig.json](./tsconfig.json) の `paths` と `include` と [webpack.config.js](./webpack.config.js) の `alias` と `CopyPlugin` を変更すれば好きな構成にできます。

[Live2D 公式の SDK](https://www.live2d.com/download/cubism-sdk/download-web/) にもフレームワークは含まれていますが名前空間の関係で使い勝手が悪いです。

[Live2D/CubismWebFramework](https://github.com/Live2D/CubismWebFramework) はそれが改善されているのでこちらを追加で用意する必要があります。

[ExceptionError/starlive2d](https://github.com/ExceptionError/starlive2d) も CubismWebFramework と同様にビルドに含めることもできますが、ライブラリとしての独立性を持たせたかったのでローカルパッケージのインストールとなっています。
必要に応じて [package.json](./package.json) を弄ってください。
