(function() {var type_impls = {
"anvil_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsRef%3CTypedTransaction%3E-for-MaybeImpersonatedTransaction\" class=\"impl\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#210-214\">source</a><a href=\"#impl-AsRef%3CTypedTransaction%3E-for-MaybeImpersonatedTransaction\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"enum\" href=\"anvil_core/eth/transaction/enum.TypedTransaction.html\" title=\"enum anvil_core::eth::transaction::TypedTransaction\">TypedTransaction</a>&gt; for <a class=\"struct\" href=\"anvil_core/eth/transaction/struct.MaybeImpersonatedTransaction.html\" title=\"struct anvil_core::eth::transaction::MaybeImpersonatedTransaction\">MaybeImpersonatedTransaction</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_ref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#211-213\">source</a><a href=\"#method.as_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html#tymethod.as_ref\" class=\"fn\">as_ref</a>(&amp;self) -&gt; &amp;<a class=\"enum\" href=\"anvil_core/eth/transaction/enum.TypedTransaction.html\" title=\"enum anvil_core::eth::transaction::TypedTransaction\">TypedTransaction</a></h4></section></summary><div class='docblock'>Converts this type into a shared reference of the (usually inferred) input type.</div></details></div></details>","AsRef<TypedTransaction>","anvil_core::eth::block::Transaction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-MaybeImpersonatedTransaction\" class=\"impl\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#142\">source</a><a href=\"#impl-Clone-for-MaybeImpersonatedTransaction\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"anvil_core/eth/transaction/struct.MaybeImpersonatedTransaction.html\" title=\"struct anvil_core::eth::transaction::MaybeImpersonatedTransaction\">MaybeImpersonatedTransaction</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#142\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"anvil_core/eth/transaction/struct.MaybeImpersonatedTransaction.html\" title=\"struct anvil_core::eth::transaction::MaybeImpersonatedTransaction\">MaybeImpersonatedTransaction</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","anvil_core::eth::block::Transaction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-MaybeImpersonatedTransaction\" class=\"impl\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#142\">source</a><a href=\"#impl-Debug-for-MaybeImpersonatedTransaction\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"anvil_core/eth/transaction/struct.MaybeImpersonatedTransaction.html\" title=\"struct anvil_core::eth::transaction::MaybeImpersonatedTransaction\">MaybeImpersonatedTransaction</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#142\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","anvil_core::eth::block::Transaction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decodable-for-MaybeImpersonatedTransaction\" class=\"impl\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#204-208\">source</a><a href=\"#impl-Decodable-for-MaybeImpersonatedTransaction\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Decodable for <a class=\"struct\" href=\"anvil_core/eth/transaction/struct.MaybeImpersonatedTransaction.html\" title=\"struct anvil_core::eth::transaction::MaybeImpersonatedTransaction\">MaybeImpersonatedTransaction</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#205-207\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>(buf: &amp;mut &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]) -&gt; Result&lt;Self&gt;</h4></section></summary><div class='docblock'>Decodes the blob into the appropriate type. <code>buf</code> must be advanced past\nthe decoded object.</div></details></div></details>","Decodable","anvil_core::eth::block::Transaction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-MaybeImpersonatedTransaction\" class=\"impl\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#216-222\">source</a><a href=\"#impl-Deref-for-MaybeImpersonatedTransaction\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"anvil_core/eth/transaction/struct.MaybeImpersonatedTransaction.html\" title=\"struct anvil_core::eth::transaction::MaybeImpersonatedTransaction\">MaybeImpersonatedTransaction</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = <a class=\"enum\" href=\"anvil_core/eth/transaction/enum.TypedTransaction.html\" title=\"enum anvil_core::eth::transaction::TypedTransaction\">TypedTransaction</a></h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#219-221\">source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; &amp;Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target\" title=\"type core::ops::deref::Deref::Target\">Target</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","anvil_core::eth::block::Transaction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encodable-for-MaybeImpersonatedTransaction\" class=\"impl\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#186-190\">source</a><a href=\"#impl-Encodable-for-MaybeImpersonatedTransaction\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Encodable for <a class=\"struct\" href=\"anvil_core/eth/transaction/struct.MaybeImpersonatedTransaction.html\" title=\"struct anvil_core::eth::transaction::MaybeImpersonatedTransaction\">MaybeImpersonatedTransaction</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#187-189\">source</a><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self, out: &amp;mut dyn BufMut)</h4></section></summary><div class='docblock'>Encodes the type into the <code>out</code> buffer.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.length\" class=\"method trait-impl\"><a href=\"#method.length\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">length</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the length of the encoding of this type in bytes. <a>Read more</a></div></details></div></details>","Encodable","anvil_core::eth::block::Transaction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CTypedTransaction%3E-for-MaybeImpersonatedTransaction\" class=\"impl\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#198-202\">source</a><a href=\"#impl-From%3CTypedTransaction%3E-for-MaybeImpersonatedTransaction\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"anvil_core/eth/transaction/enum.TypedTransaction.html\" title=\"enum anvil_core::eth::transaction::TypedTransaction\">TypedTransaction</a>&gt; for <a class=\"struct\" href=\"anvil_core/eth/transaction/struct.MaybeImpersonatedTransaction.html\" title=\"struct anvil_core::eth::transaction::MaybeImpersonatedTransaction\">MaybeImpersonatedTransaction</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#199-201\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(value: <a class=\"enum\" href=\"anvil_core/eth/transaction/enum.TypedTransaction.html\" title=\"enum anvil_core::eth::transaction::TypedTransaction\">TypedTransaction</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<TypedTransaction>","anvil_core::eth::block::Transaction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MaybeImpersonatedTransaction\" class=\"impl\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#148-184\">source</a><a href=\"#impl-MaybeImpersonatedTransaction\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"anvil_core/eth/transaction/struct.MaybeImpersonatedTransaction.html\" title=\"struct anvil_core::eth::transaction::MaybeImpersonatedTransaction\">MaybeImpersonatedTransaction</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#150-152\">source</a><h4 class=\"code-header\">pub fn <a href=\"anvil_core/eth/transaction/struct.MaybeImpersonatedTransaction.html#tymethod.new\" class=\"fn\">new</a>(transaction: <a class=\"enum\" href=\"anvil_core/eth/transaction/enum.TypedTransaction.html\" title=\"enum anvil_core::eth::transaction::TypedTransaction\">TypedTransaction</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new wrapper for the given transaction</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.impersonated\" class=\"method\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#155-157\">source</a><h4 class=\"code-header\">pub fn <a href=\"anvil_core/eth/transaction/struct.MaybeImpersonatedTransaction.html#tymethod.impersonated\" class=\"fn\">impersonated</a>(\n    transaction: <a class=\"enum\" href=\"anvil_core/eth/transaction/enum.TypedTransaction.html\" title=\"enum anvil_core::eth::transaction::TypedTransaction\">TypedTransaction</a>,\n    impersonated_sender: Address\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new impersonated transaction wrapper using the given sender</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.recover\" class=\"method\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#164-169\">source</a><h4 class=\"code-header\">pub fn <a href=\"anvil_core/eth/transaction/struct.MaybeImpersonatedTransaction.html#tymethod.recover\" class=\"fn\">recover</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Address, SignatureError&gt;</h4></section></summary><div class=\"docblock\"><p>Recovers the Ethereum address which was used to sign the transaction.</p>\n<p>Note: this is feature gated so it does not conflict with the <code>Deref</code>ed\n<a href=\"anvil_core/eth/transaction/enum.TypedTransaction.html#method.recover\" title=\"method anvil_core::eth::transaction::TypedTransaction::recover\">TypedTransaction::recover</a> function by default.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#176-183\">source</a><h4 class=\"code-header\">pub fn <a href=\"anvil_core/eth/transaction/struct.MaybeImpersonatedTransaction.html#tymethod.hash\" class=\"fn\">hash</a>(&amp;self) -&gt; B256</h4></section></summary><div class=\"docblock\"><p>Returns the hash of the transaction</p>\n<p>Note: this is feature gated so it does not conflict with the <code>Deref</code>ed\n<a href=\"anvil_core/eth/transaction/enum.TypedTransaction.html#method.hash\" title=\"method anvil_core::eth::transaction::TypedTransaction::hash\">TypedTransaction::hash</a> function by default.</p>\n</div></details></div></details>",0,"anvil_core::eth::block::Transaction"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-MaybeImpersonatedTransaction\" class=\"impl\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#142\">source</a><a href=\"#impl-PartialEq-for-MaybeImpersonatedTransaction\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"anvil_core/eth/transaction/struct.MaybeImpersonatedTransaction.html\" title=\"struct anvil_core::eth::transaction::MaybeImpersonatedTransaction\">MaybeImpersonatedTransaction</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#142\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"anvil_core/eth/transaction/struct.MaybeImpersonatedTransaction.html\" title=\"struct anvil_core::eth::transaction::MaybeImpersonatedTransaction\">MaybeImpersonatedTransaction</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","anvil_core::eth::block::Transaction"],["<section id=\"impl-Eq-for-MaybeImpersonatedTransaction\" class=\"impl\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#142\">source</a><a href=\"#impl-Eq-for-MaybeImpersonatedTransaction\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"anvil_core/eth/transaction/struct.MaybeImpersonatedTransaction.html\" title=\"struct anvil_core::eth::transaction::MaybeImpersonatedTransaction\">MaybeImpersonatedTransaction</a></h3></section>","Eq","anvil_core::eth::block::Transaction"],["<section id=\"impl-StructuralPartialEq-for-MaybeImpersonatedTransaction\" class=\"impl\"><a class=\"src rightside\" href=\"src/anvil_core/eth/transaction/mod.rs.html#142\">source</a><a href=\"#impl-StructuralPartialEq-for-MaybeImpersonatedTransaction\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"anvil_core/eth/transaction/struct.MaybeImpersonatedTransaction.html\" title=\"struct anvil_core::eth::transaction::MaybeImpersonatedTransaction\">MaybeImpersonatedTransaction</a></h3></section>","StructuralPartialEq","anvil_core::eth::block::Transaction"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()