import React, { Component } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/ext-language_tools";

import 'ace-builds/src-noconflict/mode-abap';
import 'ace-builds/src-noconflict/mode-abc';
import 'ace-builds/src-noconflict/mode-actionscript';
import 'ace-builds/src-noconflict/mode-ada';
import 'ace-builds/src-noconflict/mode-alda';
import 'ace-builds/src-noconflict/mode-apache_conf';
import 'ace-builds/src-noconflict/mode-apex';
import 'ace-builds/src-noconflict/mode-applescript';
import 'ace-builds/src-noconflict/mode-aql';
import 'ace-builds/src-noconflict/mode-asciidoc';
import 'ace-builds/src-noconflict/mode-asl';
import 'ace-builds/src-noconflict/mode-assembly_x86';
import 'ace-builds/src-noconflict/mode-autohotkey';
import 'ace-builds/src-noconflict/mode-batchfile';
import 'ace-builds/src-noconflict/mode-bibtex';
import 'ace-builds/src-noconflict/mode-c9search';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-cirru';
import 'ace-builds/src-noconflict/mode-clojure';
import 'ace-builds/src-noconflict/mode-cobol';
import 'ace-builds/src-noconflict/mode-coffee';
import 'ace-builds/src-noconflict/mode-coldfusion';
import 'ace-builds/src-noconflict/mode-crystal';
import 'ace-builds/src-noconflict/mode-csharp';
import 'ace-builds/src-noconflict/mode-csound_document';
import 'ace-builds/src-noconflict/mode-csound_orchestra';
import 'ace-builds/src-noconflict/mode-csound_score';
import 'ace-builds/src-noconflict/mode-csp';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-curly';
import 'ace-builds/src-noconflict/mode-cuttlefish';
import 'ace-builds/src-noconflict/mode-d';
import 'ace-builds/src-noconflict/mode-dart';
import 'ace-builds/src-noconflict/mode-diff';
import 'ace-builds/src-noconflict/mode-django';
import 'ace-builds/src-noconflict/mode-dockerfile';
import 'ace-builds/src-noconflict/mode-dot';
import 'ace-builds/src-noconflict/mode-drools';
import 'ace-builds/src-noconflict/mode-edifact';
import 'ace-builds/src-noconflict/mode-eiffel';
import 'ace-builds/src-noconflict/mode-ejs';
import 'ace-builds/src-noconflict/mode-elixir';
import 'ace-builds/src-noconflict/mode-elm';
import 'ace-builds/src-noconflict/mode-erlang';
import 'ace-builds/src-noconflict/mode-forth';
import 'ace-builds/src-noconflict/mode-fortran';
import 'ace-builds/src-noconflict/mode-fsharp';
import 'ace-builds/src-noconflict/mode-fsl';
import 'ace-builds/src-noconflict/mode-ftl';
import 'ace-builds/src-noconflict/mode-gcode';
import 'ace-builds/src-noconflict/mode-gherkin';
import 'ace-builds/src-noconflict/mode-gitignore';
import 'ace-builds/src-noconflict/mode-glsl';
import 'ace-builds/src-noconflict/mode-gobstones';
import 'ace-builds/src-noconflict/mode-golang';
import 'ace-builds/src-noconflict/mode-graphqlschema';
import 'ace-builds/src-noconflict/mode-groovy';
import 'ace-builds/src-noconflict/mode-haml';
import 'ace-builds/src-noconflict/mode-handlebars';
import 'ace-builds/src-noconflict/mode-haskell';
import 'ace-builds/src-noconflict/mode-haskell_cabal';
import 'ace-builds/src-noconflict/mode-haxe';
import 'ace-builds/src-noconflict/mode-hjson';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-html_elixir';
import 'ace-builds/src-noconflict/mode-html_ruby';
import 'ace-builds/src-noconflict/mode-ini';
import 'ace-builds/src-noconflict/mode-io';
import 'ace-builds/src-noconflict/mode-ion';
import 'ace-builds/src-noconflict/mode-jack';
import 'ace-builds/src-noconflict/mode-jade';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-jexl';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-json5';
import 'ace-builds/src-noconflict/mode-jsoniq';
import 'ace-builds/src-noconflict/mode-jsp';
import 'ace-builds/src-noconflict/mode-jssm';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/mode-julia';
import 'ace-builds/src-noconflict/mode-kotlin';
import 'ace-builds/src-noconflict/mode-latex';
import 'ace-builds/src-noconflict/mode-latte';
import 'ace-builds/src-noconflict/mode-less';
import 'ace-builds/src-noconflict/mode-liquid';
import 'ace-builds/src-noconflict/mode-lisp';
import 'ace-builds/src-noconflict/mode-livescript';
import 'ace-builds/src-noconflict/mode-logiql';
import 'ace-builds/src-noconflict/mode-logtalk';
import 'ace-builds/src-noconflict/mode-lsl';
import 'ace-builds/src-noconflict/mode-lua';
import 'ace-builds/src-noconflict/mode-luapage';
import 'ace-builds/src-noconflict/mode-lucene';
import 'ace-builds/src-noconflict/mode-makefile';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/mode-mask';
import 'ace-builds/src-noconflict/mode-matlab';
import 'ace-builds/src-noconflict/mode-maze';
import 'ace-builds/src-noconflict/mode-mediawiki';
import 'ace-builds/src-noconflict/mode-mel';
import 'ace-builds/src-noconflict/mode-mips';
import 'ace-builds/src-noconflict/mode-mixal';
import 'ace-builds/src-noconflict/mode-mushcode';
import 'ace-builds/src-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/mode-nginx';
import 'ace-builds/src-noconflict/mode-nim';
import 'ace-builds/src-noconflict/mode-nix';
import 'ace-builds/src-noconflict/mode-nsis';
import 'ace-builds/src-noconflict/mode-nunjucks';
import 'ace-builds/src-noconflict/mode-objectivec';
import 'ace-builds/src-noconflict/mode-ocaml';
import 'ace-builds/src-noconflict/mode-odin';
import 'ace-builds/src-noconflict/mode-partiql';
import 'ace-builds/src-noconflict/mode-pascal';
import 'ace-builds/src-noconflict/mode-perl';
import 'ace-builds/src-noconflict/mode-pgsql';
import 'ace-builds/src-noconflict/mode-php';
import 'ace-builds/src-noconflict/mode-php_laravel_blade';
import 'ace-builds/src-noconflict/mode-pig';
import 'ace-builds/src-noconflict/mode-plain_text';
import 'ace-builds/src-noconflict/mode-plsql';
import 'ace-builds/src-noconflict/mode-powershell';
import 'ace-builds/src-noconflict/mode-praat';
import 'ace-builds/src-noconflict/mode-prisma';
import 'ace-builds/src-noconflict/mode-prolog';
import 'ace-builds/src-noconflict/mode-properties';
import 'ace-builds/src-noconflict/mode-protobuf';
import 'ace-builds/src-noconflict/mode-puppet';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-qml';
import 'ace-builds/src-noconflict/mode-r';
import 'ace-builds/src-noconflict/mode-raku';
import 'ace-builds/src-noconflict/mode-razor';
import 'ace-builds/src-noconflict/mode-rdoc';
import 'ace-builds/src-noconflict/mode-red';
import 'ace-builds/src-noconflict/mode-redshift';
import 'ace-builds/src-noconflict/mode-rhtml';
import 'ace-builds/src-noconflict/mode-robot';
import 'ace-builds/src-noconflict/mode-rst';
import 'ace-builds/src-noconflict/mode-ruby';
import 'ace-builds/src-noconflict/mode-rust';
import 'ace-builds/src-noconflict/mode-sac';
import 'ace-builds/src-noconflict/mode-sass';
import 'ace-builds/src-noconflict/mode-scad';
import 'ace-builds/src-noconflict/mode-scala';
import 'ace-builds/src-noconflict/mode-scheme';
import 'ace-builds/src-noconflict/mode-scrypt';
import 'ace-builds/src-noconflict/mode-scss';
import 'ace-builds/src-noconflict/mode-sh';
import 'ace-builds/src-noconflict/mode-sjs';
import 'ace-builds/src-noconflict/mode-slim';
import 'ace-builds/src-noconflict/mode-smarty';
import 'ace-builds/src-noconflict/mode-smithy';
import 'ace-builds/src-noconflict/mode-snippets';
import 'ace-builds/src-noconflict/mode-soy_template';
import 'ace-builds/src-noconflict/mode-space';
import 'ace-builds/src-noconflict/mode-sparql';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/mode-sqlserver';
import 'ace-builds/src-noconflict/mode-stylus';
import 'ace-builds/src-noconflict/mode-svg';
import 'ace-builds/src-noconflict/mode-swift';
import 'ace-builds/src-noconflict/mode-tcl';
import 'ace-builds/src-noconflict/mode-terraform';
import 'ace-builds/src-noconflict/mode-tex';
import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/mode-textile';
import 'ace-builds/src-noconflict/mode-toml';
import 'ace-builds/src-noconflict/mode-tsx';
import 'ace-builds/src-noconflict/mode-turtle';
import 'ace-builds/src-noconflict/mode-twig';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/mode-vala';
import 'ace-builds/src-noconflict/mode-vbscript';
import 'ace-builds/src-noconflict/mode-velocity';
import 'ace-builds/src-noconflict/mode-verilog';
import 'ace-builds/src-noconflict/mode-vhdl';
import 'ace-builds/src-noconflict/mode-visualforce';
import 'ace-builds/src-noconflict/mode-wollok';
import 'ace-builds/src-noconflict/mode-xml';
import 'ace-builds/src-noconflict/mode-xquery';
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/mode-zeek';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/snippets/abap';
import 'ace-builds/src-noconflict/snippets/abc';
import 'ace-builds/src-noconflict/snippets/actionscript';
import 'ace-builds/src-noconflict/snippets/ada';
import 'ace-builds/src-noconflict/snippets/alda';
import 'ace-builds/src-noconflict/snippets/apache_conf';
import 'ace-builds/src-noconflict/snippets/apex';
import 'ace-builds/src-noconflict/snippets/applescript';
import 'ace-builds/src-noconflict/snippets/aql';
import 'ace-builds/src-noconflict/snippets/asciidoc';
import 'ace-builds/src-noconflict/snippets/asl';
import 'ace-builds/src-noconflict/snippets/assembly_x86';
import 'ace-builds/src-noconflict/snippets/autohotkey';
import 'ace-builds/src-noconflict/snippets/batchfile';
import 'ace-builds/src-noconflict/snippets/bibtex';
import 'ace-builds/src-noconflict/snippets/c9search';
import 'ace-builds/src-noconflict/snippets/c_cpp';
import 'ace-builds/src-noconflict/snippets/cirru';
import 'ace-builds/src-noconflict/snippets/clojure';
import 'ace-builds/src-noconflict/snippets/cobol';
import 'ace-builds/src-noconflict/snippets/coffee';
import 'ace-builds/src-noconflict/snippets/coldfusion';
import 'ace-builds/src-noconflict/snippets/crystal';
import 'ace-builds/src-noconflict/snippets/csharp';
import 'ace-builds/src-noconflict/snippets/csound_document';
import 'ace-builds/src-noconflict/snippets/csound_orchestra';
import 'ace-builds/src-noconflict/snippets/csound_score';
import 'ace-builds/src-noconflict/snippets/csp';
import 'ace-builds/src-noconflict/snippets/css';
import 'ace-builds/src-noconflict/snippets/curly';
import 'ace-builds/src-noconflict/snippets/cuttlefish';
import 'ace-builds/src-noconflict/snippets/d';
import 'ace-builds/src-noconflict/snippets/dart';
import 'ace-builds/src-noconflict/snippets/diff';
import 'ace-builds/src-noconflict/snippets/django';
import 'ace-builds/src-noconflict/snippets/dockerfile';
import 'ace-builds/src-noconflict/snippets/dot';
import 'ace-builds/src-noconflict/snippets/drools';
import 'ace-builds/src-noconflict/snippets/edifact';
import 'ace-builds/src-noconflict/snippets/eiffel';
import 'ace-builds/src-noconflict/snippets/ejs';
import 'ace-builds/src-noconflict/snippets/elixir';
import 'ace-builds/src-noconflict/snippets/elm';
import 'ace-builds/src-noconflict/snippets/erlang';
import 'ace-builds/src-noconflict/snippets/forth';
import 'ace-builds/src-noconflict/snippets/fortran';
import 'ace-builds/src-noconflict/snippets/fsharp';
import 'ace-builds/src-noconflict/snippets/fsl';
import 'ace-builds/src-noconflict/snippets/ftl';
import 'ace-builds/src-noconflict/snippets/gcode';
import 'ace-builds/src-noconflict/snippets/gherkin';
import 'ace-builds/src-noconflict/snippets/gitignore';
import 'ace-builds/src-noconflict/snippets/glsl';
import 'ace-builds/src-noconflict/snippets/gobstones';
import 'ace-builds/src-noconflict/snippets/golang';
import 'ace-builds/src-noconflict/snippets/graphqlschema';
import 'ace-builds/src-noconflict/snippets/groovy';
import 'ace-builds/src-noconflict/snippets/haml';
import 'ace-builds/src-noconflict/snippets/handlebars';
import 'ace-builds/src-noconflict/snippets/haskell';
import 'ace-builds/src-noconflict/snippets/haskell_cabal';
import 'ace-builds/src-noconflict/snippets/haxe';
import 'ace-builds/src-noconflict/snippets/hjson';
import 'ace-builds/src-noconflict/snippets/html';
import 'ace-builds/src-noconflict/snippets/html_elixir';
import 'ace-builds/src-noconflict/snippets/html_ruby';
import 'ace-builds/src-noconflict/snippets/ini';
import 'ace-builds/src-noconflict/snippets/io';
import 'ace-builds/src-noconflict/snippets/ion';
import 'ace-builds/src-noconflict/snippets/jack';
import 'ace-builds/src-noconflict/snippets/jade';
import 'ace-builds/src-noconflict/snippets/java';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/snippets/jexl';
import 'ace-builds/src-noconflict/snippets/json';
import 'ace-builds/src-noconflict/snippets/json5';
import 'ace-builds/src-noconflict/snippets/jsoniq';
import 'ace-builds/src-noconflict/snippets/jsp';
import 'ace-builds/src-noconflict/snippets/jssm';
import 'ace-builds/src-noconflict/snippets/jsx';
import 'ace-builds/src-noconflict/snippets/julia';
import 'ace-builds/src-noconflict/snippets/kotlin';
import 'ace-builds/src-noconflict/snippets/latex';
import 'ace-builds/src-noconflict/snippets/latte';
import 'ace-builds/src-noconflict/snippets/less';
import 'ace-builds/src-noconflict/snippets/liquid';
import 'ace-builds/src-noconflict/snippets/lisp';
import 'ace-builds/src-noconflict/snippets/livescript';
import 'ace-builds/src-noconflict/snippets/logiql';
import 'ace-builds/src-noconflict/snippets/logtalk';
import 'ace-builds/src-noconflict/snippets/lsl';
import 'ace-builds/src-noconflict/snippets/lua';
import 'ace-builds/src-noconflict/snippets/luapage';
import 'ace-builds/src-noconflict/snippets/lucene';
import 'ace-builds/src-noconflict/snippets/makefile';
import 'ace-builds/src-noconflict/snippets/markdown';
import 'ace-builds/src-noconflict/snippets/mask';
import 'ace-builds/src-noconflict/snippets/matlab';
import 'ace-builds/src-noconflict/snippets/maze';
import 'ace-builds/src-noconflict/snippets/mediawiki';
import 'ace-builds/src-noconflict/snippets/mel';
import 'ace-builds/src-noconflict/snippets/mips';
import 'ace-builds/src-noconflict/snippets/mixal';
import 'ace-builds/src-noconflict/snippets/mushcode';
import 'ace-builds/src-noconflict/snippets/mysql';
import 'ace-builds/src-noconflict/snippets/nginx';
import 'ace-builds/src-noconflict/snippets/nim';
import 'ace-builds/src-noconflict/snippets/nix';
import 'ace-builds/src-noconflict/snippets/nsis';
import 'ace-builds/src-noconflict/snippets/nunjucks';
import 'ace-builds/src-noconflict/snippets/objectivec';
import 'ace-builds/src-noconflict/snippets/ocaml';
import 'ace-builds/src-noconflict/snippets/odin';
import 'ace-builds/src-noconflict/snippets/partiql';
import 'ace-builds/src-noconflict/snippets/pascal';
import 'ace-builds/src-noconflict/snippets/perl';
import 'ace-builds/src-noconflict/snippets/pgsql';
import 'ace-builds/src-noconflict/snippets/php';
import 'ace-builds/src-noconflict/snippets/php_laravel_blade';
import 'ace-builds/src-noconflict/snippets/pig';
import 'ace-builds/src-noconflict/snippets/plain_text';
import 'ace-builds/src-noconflict/snippets/plsql';
import 'ace-builds/src-noconflict/snippets/powershell';
import 'ace-builds/src-noconflict/snippets/praat';
import 'ace-builds/src-noconflict/snippets/prisma';
import 'ace-builds/src-noconflict/snippets/prolog';
import 'ace-builds/src-noconflict/snippets/properties';
import 'ace-builds/src-noconflict/snippets/protobuf';
import 'ace-builds/src-noconflict/snippets/puppet';
import 'ace-builds/src-noconflict/snippets/python';
import 'ace-builds/src-noconflict/snippets/qml';
import 'ace-builds/src-noconflict/snippets/r';
import 'ace-builds/src-noconflict/snippets/raku';
import 'ace-builds/src-noconflict/snippets/razor';
import 'ace-builds/src-noconflict/snippets/rdoc';
import 'ace-builds/src-noconflict/snippets/red';
import 'ace-builds/src-noconflict/snippets/redshift';
import 'ace-builds/src-noconflict/snippets/rhtml';
import 'ace-builds/src-noconflict/snippets/robot';
import 'ace-builds/src-noconflict/snippets/rst';
import 'ace-builds/src-noconflict/snippets/ruby';
import 'ace-builds/src-noconflict/snippets/rust';
import 'ace-builds/src-noconflict/snippets/sac';
import 'ace-builds/src-noconflict/snippets/sass';
import 'ace-builds/src-noconflict/snippets/scad';
import 'ace-builds/src-noconflict/snippets/scala';
import 'ace-builds/src-noconflict/snippets/scheme';
import 'ace-builds/src-noconflict/snippets/scrypt';
import 'ace-builds/src-noconflict/snippets/scss';
import 'ace-builds/src-noconflict/snippets/sh';
import 'ace-builds/src-noconflict/snippets/sjs';
import 'ace-builds/src-noconflict/snippets/slim';
import 'ace-builds/src-noconflict/snippets/smarty';
import 'ace-builds/src-noconflict/snippets/smithy';
import 'ace-builds/src-noconflict/snippets/snippets';
import 'ace-builds/src-noconflict/snippets/soy_template';
import 'ace-builds/src-noconflict/snippets/space';
import 'ace-builds/src-noconflict/snippets/sparql';
import 'ace-builds/src-noconflict/snippets/sql';
import 'ace-builds/src-noconflict/snippets/sqlserver';
import 'ace-builds/src-noconflict/snippets/stylus';
import 'ace-builds/src-noconflict/snippets/svg';
import 'ace-builds/src-noconflict/snippets/swift';
import 'ace-builds/src-noconflict/snippets/tcl';
import 'ace-builds/src-noconflict/snippets/terraform';
import 'ace-builds/src-noconflict/snippets/tex';
import 'ace-builds/src-noconflict/snippets/text';
import 'ace-builds/src-noconflict/snippets/textile';
import 'ace-builds/src-noconflict/snippets/toml';
import 'ace-builds/src-noconflict/snippets/tsx';
import 'ace-builds/src-noconflict/snippets/turtle';
import 'ace-builds/src-noconflict/snippets/twig';
import 'ace-builds/src-noconflict/snippets/typescript';
import 'ace-builds/src-noconflict/snippets/vala';
import 'ace-builds/src-noconflict/snippets/vbscript';
import 'ace-builds/src-noconflict/snippets/velocity';
import 'ace-builds/src-noconflict/snippets/verilog';
import 'ace-builds/src-noconflict/snippets/vhdl';
import 'ace-builds/src-noconflict/snippets/visualforce';
import 'ace-builds/src-noconflict/snippets/wollok';
import 'ace-builds/src-noconflict/snippets/xml';
import 'ace-builds/src-noconflict/snippets/xquery';
import 'ace-builds/src-noconflict/snippets/yaml';
import 'ace-builds/src-noconflict/snippets/zeek';


const languages = [
    'abap',
    'abc',
    'actionscript',
    'ada',
    'alda',
    'apache_conf',
    'apex',
    'applescript',
    'aql',
    'asciidoc',
    'asl',
    'assembly_x86',
    'autohotkey',
    'batchfile',
    'c9search',
    'c_cpp',
    'cirru',
    'clojure',
    'cobol',
    'coffee',
    'coldfusion',
    'crystal',
    'csharp',
    'csound_document',
    'csound_orchestra',
    'csound_score',
    'csp',
    'css',
    'curly',
    'd',
    'dart',
    'diff',
    'django',
    'dockerfile',
    'dot',
    'drools',
    'edifact',
    'eiffel',
    'ejs',
    'elixir',
    'elm',
    'erlang',
    'forth',
    'fortran',
    'fsharp',
    'fsl',
    'ftl',
    'gcode',
    'gherkin',
    'gitignore',
    'glsl',
    'gobstones',
    'golang',
    'graphqlschema',
    'groovy',
    'haml',
    'handlebars',
    'haskell',
    'haskell_cabal',
    'haxe',
    'hjson',
    'html',
    'html_elixir',
    'html_ruby',
    'ini',
    'io',
    'jack',
    'jade',
    'java',
    'javascript',
    'json',
    'json5',
    'jsoniq',
    'jsp',
    'jssm',
    'jsx',
    'julia',
    'kotlin',
    'latex',
    'less',
    'liquid',
    'lisp',
    'livescript',
    'logiql',
    'logtalk',
    'lsl',
    'lua',
    'luapage',
    'lucene',
    'makefile',
    'markdown',
    'mask',
    'matlab',
    'maze',
    'mediawiki',
    'mel',
    'mixal',
    'mushcode',
    'mysql',
    'nginx',
    'nim',
    'nix',
    'nsis',
    'nunjucks',
    'objectivec',
    'ocaml',
    'pascal',
    'perl',
    'perl6',
    'pgsql',
    'php',
    'php_laravel_blade',
    'pig',
    'plain_text',
    'powershell',
    'praat',
    'prisma',
    'prolog',
    'properties',
    'protobuf',
    'puppet',
    'python',
    'qml',
    'r',
    'razor',
    'rdoc',
    'red',
    'redshift',
    'rhtml',
    'rst',
    'ruby',
    'rust',
    'sass',
    'scad',
    'scala',
    'scheme',
    'scss',
    'sh',
    'sjs',
    'slim',
    'smarty',
    'snippets',
    'soy_template',
    'space',
    'sparql',
    'sql',
    'sqlserver',
    'stylus',
    'svg',
    'swift',
    'tcl',
    'terraform',
    'tex',
    'text',
    'textile',
    'toml',
    'tsx',
    'turtle',
    'twig',
    'typescript',
    'vala',
    'vbscript',
    'velocity',
    'verilog',
    'vhdl',
    'visualforce',
    'wollok',
    'xml',
    'xquery',
    'yaml',
    'zeek'
];

class Editor extends Component {
    onLoad() { }

    onChange(newValue) {
        this.setState({
            value: newValue
        });
    }

    onSelectionChange(newValue, event) {

    }

    onCursorChange(newValue, event) {

    }

    onValidate(annotations) {

    }

    setMode(e) {
        this.setState({
            mode: e.target.value
        });
    }
    setFontSize(e) {
        this.setState({
            fontSize: parseInt(e.target.value, 10)
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            mode: "javascript",
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            fontSize: 14,
            showGutter: true,
            showPrintMargin: true,
            highlightActiveLine: true,
            enableSnippets: true,
            showLineNumbers: true
        };

        this.setMode = this.setMode.bind(this);
        this.onChange = this.onChange.bind(this);
        this.setFontSize = this.setFontSize.bind(this);
    }
    render() {
        return (
            <div className="flex w-full flex-col">
                <div className="px-12 gap-10 flex items-center h-10">
                    <div className="flex gap-5 items-center">
                        <label>Language:</label>
                        <select
                            name="mode"
                            className="border border-gray-300 rounded-md p-1 text-black"
                            onChange={this.setMode}
                            value={this.state.mode}
                        >
                            {languages.map(lang => (
                                <option key={lang} value={lang}>
                                    {lang}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex gap-5 items-center">
                        <label>Font size:</label>
                        <select
                            name="Font Size"
                            className="border border-gray-300 rounded-md p-1 text-black"
                            onChange={this.setFontSize}
                            value={this.state.fontSize}
                        >
                            {[14, 16, 18, 20, 24, 28, 32, 40].map(lang => (
                                <option key={lang} value={lang}>
                                    {lang}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <AceEditor
                    className="!w-full !h-[calc(100vh-2.5rem)]"
                    placeholder="Start write your code here..."
                    mode={this.state.mode}
                    theme="monokai"
                    name="blah2"
                    onLoad={this.onLoad}
                    onChange={this.onChange}
                    onSelectionChange={this.onSelectionChange}
                    onCursorChange={this.onCursorChange}
                    onValidate={this.onValidate}
                    value={this.state.value}
                    fontSize={this.state.fontSize}
                    showPrintMargin={this.state.showPrintMargin}
                    showGutter={this.state.showGutter}
                    highlightActiveLine={this.state.highlightActiveLine}
                    setOptions={{
                        useSoftTabs: true,
                        displayIndentGuides: true,
                        useWorker: false,
                        enableBasicAutocompletion: this.state.enableBasicAutocompletion,
                        enableLiveAutocompletion: this.state.enableLiveAutocompletion,
                        enableSnippets: this.state.enableSnippets,
                        showLineNumbers: this.state.showLineNumbers,
                        tabSize: 2
                    }}
                />
            </div>
        );
    }
}

export default Editor;